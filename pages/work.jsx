import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../components/Container'

const work = [
  {
    type: 'Experimental agent control',
    name: 'Stopline',
    description:
      'A browser-agent decision gate. A model classifies a proposed action and application policy decides whether it may run. The repository documents the mechanism and its limits.',
    href: 'https://github.com/mdabydeen/stopline',
    action: 'Inspect Stopline on GitHub',
    detailHref: 'https://github.com/mdabydeen/stopline/blob/main/docs/team-evaluation-guide.md',
    detailAction: 'Read the team evaluation guide',
  },
  {
    type: 'Local coding agent',
    name: 'Metron',
    description:
      'A small terminal agent for local AI development. It limits the tool surface, proposes a patch, and waits for explicit approval before applying it.',
    href: 'https://github.com/mdabydeen/metron',
    action: 'Inspect Metron on GitHub',
    detailHref: 'https://github.com/mdabydeen/metron/blob/main/docs/evaluation-brief.md',
    detailAction: 'Read the evaluation brief',
  },
  {
    type: 'Free teaching exercise',
    name: 'AI-assisted code review kit',
    description:
      'An illustrative shipment-mapping exercise with runnable JavaScript, a worksheet, and a worked answer. It examines an unsupported default that the original fixtures miss.',
    href: '/resources/review-kit.zip',
    action: 'Download the complete kit (ZIP)',
    detailHref: '/articles/what-passing-tests-leave-unresolved',
    detailAction: 'Read the article',
  },
]

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Mike Dabydeen</title>
        <meta name="description" content="Public engineering work and teaching material by Mike Dabydeen, with code, limits, and source material to inspect." />
        <meta property="og:title" content="Work - Mike Dabydeen" />
        <meta property="og:description" content="Public engineering work and teaching material with code, limits, and source material to inspect." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://michaeldabydeen.com/work" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Container className="mt-16 sm:mt-28">
        <header className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-[-0.035em] text-zinc-900 dark:text-zinc-50 sm:text-7xl">
            Work you can inspect.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I publish small engineering artefacts and teaching material to make a design decision easier to examine. Each one states what it does, what it leaves unproven, and where to look next.
          </p>
        </header>

        <section className="mt-20 border-t border-zinc-200 dark:border-zinc-800" aria-label="Public work">
          {work.map((item) => (
            <article key={item.name} className="grid gap-5 border-b border-zinc-200 py-10 sm:grid-cols-12 sm:gap-8 dark:border-zinc-800">
              <p className="text-sm font-medium text-zinc-500 sm:col-span-3 dark:text-zinc-400">
                {item.type}
              </p>
              <div className="sm:col-span-7">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 text-sm font-medium sm:col-span-2 sm:items-end">
                <a className="inline-flex items-center gap-1.5 text-teal-700 underline decoration-teal-700/25 underline-offset-4 transition hover:text-teal-900 hover:decoration-teal-900 dark:text-teal-400 dark:hover:text-teal-300" href={item.href}>
                  {item.action}<ArrowUpRightIcon className="h-4 w-4" />
                </a>
                <a className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 hover:decoration-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-100" href={item.detailHref}>
                  {item.detailAction}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 border-y border-zinc-200 py-10 sm:grid-cols-12 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-zinc-900 sm:col-span-4 dark:text-zinc-100">
            Apply the review exercise to a real process.
          </h2>
          <div className="sm:col-span-7">
            <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I also offer a proposed private workshop for teams that want to examine their own review expectations. The page describes an interest enquiry. It does not reserve a date or accept payment.
            </p>
            <Link className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 underline decoration-teal-700/25 underline-offset-4 transition hover:text-teal-900 hover:decoration-teal-900 dark:text-teal-400 dark:hover:text-teal-300" href="/workshops/ai-assisted-code-review">
              Review the workshop details<ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Container>
    </>
  )
}
