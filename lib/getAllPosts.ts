import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import * as path from 'path'

//const postsDirectory = path.join(process.cwd(), 'content/posts/${language}')
const postsDirectory = path.join(process.cwd(), `content/posts/`)

export type PostContent = {
  readonly date: string
  readonly title: string
  readonly slug: string
  readonly tags?: string[]
  readonly fullPath: string
  readonly author?: string
  readonly description?: string
  readonly thumbnail?: string
  readonly location?: string
  readonly content?: string
}

let postCache: { [locale: string]: PostContent[] } = {}

export async function fetchPostContent(
  locale: string = 'en'
): Promise<PostContent[]> {
  if (postCache[locale]) {
    return postCache[locale]
  }

  const localeDirectory = path.join(postsDirectory, locale)

  // Check if the locale directory exists
  if (!fs.existsSync(localeDirectory)) {
    throw new Error(`Locale directory '${locale}' not found.`)
  }
  // Get file names under locale directory
  const fileNames = fs.readdirSync(localeDirectory)

  const allPostsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map(async (fileName) => {
      const fullPath = path.join(localeDirectory, fileName)
      const fileContents = await fs.promises.readFile(fullPath, 'utf8')

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        date: string
        title: string
        tags: string[]
        slug: string
        fullPath: string
        author?: string
        description: string
        thumbnail?: string
        location?: string
        content?: string
      }

      matterData.fullPath = fullPath

      const slug = fileName.replace(/\.mdx$/, '')

      matterData.slug = slug

      // Validate slug string
      // if (matterData.slug !== slug) {
      //   throw new Error(
      //     'slug field not match with the path of its content source'
      //   )
      // }

      // Read and store the actual post content
      matterData.content = await fs.promises.readFile(fullPath, 'utf8')

      return matterData
    })

  // Wait for all promises to resolve before processing further
  const allPosts = await Promise.all(allPostsData)

  // Sort posts by date
  postCache[locale] = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))

  return postCache[locale]
}

export async function countPosts(
  tag?: string,
  locale: string = 'en'
): Promise<number> {
  return fetchPostContent(locale).then(
    (posts) =>
      posts.filter((it) => !tag || (it.tags && it.tags.includes(tag))).length
  )
}

export async function listPostContent(
  page: number,
  limit: number,
  tag?: string,
  locale: string = 'en'
): Promise<PostContent[]> {
  return fetchPostContent(locale).then((posts) =>
    posts
      .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
      .slice((page - 1) * limit, page * limit)
  )
}
