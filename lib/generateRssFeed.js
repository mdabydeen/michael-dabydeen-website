import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile,readFile } from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'
import yaml from 'js-yaml'

import { fetchPostContent } from '../lib/getAllPosts'

export async function generateRssFeed() {
  let articles = await fetchPostContent()

  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Mike Dabydeen',
    email: 'mdabydeen@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Software engineering leader, founder, Web3, blockchain & open source enthusiast',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let article of articles) {
    let url = `${siteUrl}/articles/${article.slug}`
    const source = await readFile(article.fullPath, 'utf8')

    const { content } = matter(source, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    const mdxSource = await serialize(content, { parseFrontmatter: true })
        
    let html = ReactDOMServer.renderToStaticMarkup(
      <MDXRemote {...mdxSource} isRssFeed />
    )

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
