import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  poweredByHeader: false,
  webpack(config, { nextRuntime }) {
      if (typeof nextRuntime === "undefined") {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false
        }
      }

      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      });

      

    return config;
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
  experimental: {
    mdxRs: true,
  },
})

export default withMDX(nextConfig)
