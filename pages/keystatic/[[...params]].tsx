import Head from 'next/head'
import Link from 'next/link'
import { makePage } from '@keystatic/next/ui/pages'

import config from '../../keystatic.config'

const KeystaticApp = makePage(config)

function CmsUnavailable() {
  return (
    <>
      <Head>
        <title>Editorial access unavailable - Mike Dabydeen</title>
        <meta
          name="description"
          content="The production editorial interface is waiting for its GitHub OAuth configuration."
        />
      </Head>
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Production editor unavailable
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            GitHub OAuth has not been configured, so sign-in is disabled and this page cannot publish content. The editor uses GitHub to create reviewable changes.
          </p>
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-base font-semibold">Available next steps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <li>For local drafting, run <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">NEXT_PUBLIC_KEYSTATIC_LOCAL=true npm run dev</code>.</li>
              <li>For production editing, configure the repository&apos;s GitHub OAuth application and callback URL.</li>
            </ul>
          </div>
          <p className="mt-8 text-sm">
            <Link
              href="/"
              className="font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-4 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:text-teal-400 dark:decoration-teal-400/40 dark:hover:text-teal-300 dark:focus-visible:outline-teal-400"
            >
              Return to the site
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}

export default function KeystaticRoute({ cmsReady }: { cmsReady: boolean }) {
  return cmsReady ? <KeystaticApp /> : <CmsUnavailable />
}

export function getServerSideProps() {
  const cmsReady =
    process.env.NODE_ENV !== 'production' ||
    Boolean(
      process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
        process.env.KEYSTATIC_SECRET,
    )

  return { props: { cmsReady } }
}
