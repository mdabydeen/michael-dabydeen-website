import { ArticleLayout } from '../../components/ArticleLayout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostContent, fetchPostContent } from '../../lib/getAllPosts'
import matter from 'gray-matter'
import * as fs from 'fs'
import yaml from 'js-yaml'

interface Meta {
  title: string
  date: string
  slug: string
  tags: string[]
  author?: string
  description?: string
  fullPath: string
  thumbnail?: string
  location?: string
}

interface Hash {
  [key: string]: PostContent
}

export type Props = {
  meta: Meta
  source: MDXRemoteSerializeResult
}

const slugToPostContent = ((postContents) => {
  let hash: Hash = {}
  postContents.forEach((post) => (hash[post.slug] = post))
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((article) => '/articles/' + article.slug)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.article as string

  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8')

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
        // slug: data.slug,
        description: data.description,
        tags: data.tags,
        // author: data.author,
      },
      source: mdxSource,
    },
  }
}
