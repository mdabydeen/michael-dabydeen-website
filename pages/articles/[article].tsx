import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ArticleLayout } from '../../components/ArticleLayout'
import { fetchPostContent, PostContent } from '../../lib/getAllPosts'

interface Meta {
  title: string
  date: string
  slug: string
  tags: string[]
  author?: string
  description?: string
  fullPath: string
  thumbnail?: string
  location?: string[]
}

interface Hash {
  [key: string]: PostContent
}

export type Props = {
  meta: Meta
  source: MDXRemoteSerializeResult
}

const slugToPostContent = (async (postContents: Promise<PostContent[]>) => {
  let hash: Hash = {}
  const contents = await postContents

  contents.forEach((post) => (hash[post.slug] = post))

  return hash
})(fetchPostContent())

const Article = ({ meta, source, ...props }: Props) => {
  const components = {}

  const content = <MDXRemote {...source} components={components} />

  return (
    <ArticleLayout meta={meta} {...props}>
      {content}
    </ArticleLayout>
  )
}

export default Article

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const content = await fetchPostContent()
  let paths: {
    params: {
      article: string
    }
    locale?: string
  }[] = []

  if (locales) {
    locales.forEach((locale) => {
      const localePaths = content.map((article) => ({
        params: { article: article.slug },
        locale,
      }))
      paths = [...paths, ...localePaths]
    })
  } else {
    paths = content.map((article) => ({
      params: { article: article.slug },
    }))
  }
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.article as string
  const posts = await slugToPostContent
  const source = await fs.promises.readFile(posts[slug].fullPath, 'utf8')

  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  })

  const mdxSource = await serialize(content, { parseFrontmatter: true })

  return {
    props: {
      meta: {
        title: data.title,
        date: data.date,
        location: data.location,
        //slug: data.slug,
        description: data.description,
        tags: data.tags,
        //author: data.author,
      },
      source: mdxSource,
    },
  }
}
