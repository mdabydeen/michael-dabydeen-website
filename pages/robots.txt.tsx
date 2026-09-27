import { GetServerSideProps } from 'next'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://michaeldabydeen.com').replace(/\/$/, '')

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`)
  res.end()

  return { props: {} }
}

export default function Robots() {
  return null
}
