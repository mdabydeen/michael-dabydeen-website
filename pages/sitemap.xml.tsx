import { GetServerSideProps } from 'next'
import { fetchPostContent } from '../lib/getAllPosts'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://michaeldabydeen.com').replace(/\/$/, '')

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticRoutes = ['', '/about', '/projects', '/speaking', '/articles', '/resources/review-kit', '/workshops/ai-assisted-code-review']
  const articleRoutes = fetchPostContent().map((post) => `/articles/${post.slug}`)
  const urls = [...staticRoutes, ...articleRoutes]
    .map((route) => `<url><loc>${escapeXml(`${siteUrl}${route}`)}</loc></url>`)
    .join('')

  res.setHeader('Content-Type', 'application/xml')
  res.write(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
