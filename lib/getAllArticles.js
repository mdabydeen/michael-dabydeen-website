import glob from 'fast-glob'
import * as path from 'path'
import * as fs from 'fs'
import matter from 'gray-matter'


async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )


  return {
    slug: articleFilename.replace(/(\/index)?\.md$/, '').replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx','*.md', '*/index.mdx'], {
    cwd: path.join(process.cwd(), '/pages/articles'),
  })

  // const allPostsData = articleFilenames
  // .filter((it) => it.endsWith(".md"));

 // console.log(allPostsData);

  let articles = await Promise.all(articleFilenames.filter((it) => it.endsWith(".mdx")).map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function getarticles() {
  if (postCache) {
    return postCache;
  }

  let articleFilenames = await glob(['*.mdx','*.md', '*/index.mdx'], {
    cwd: path.join(process.cwd(), '/pages/articles'),
  })

  const allPostsData = articleFilenames
    .filter((it) => it.endsWith(".mdx"));


  console.log(allPostsData);

}