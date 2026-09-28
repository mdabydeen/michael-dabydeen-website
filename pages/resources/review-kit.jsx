import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '../../components/SimpleLayout'

export default function ReviewKitPage() {
  return (
    <>
      <Head>
        <title>AI-assisted code review kit - Mike Dabydeen</title>
        <meta
          name="description"
          content="A free, illustrative exercise for reviewing an AI-assisted integration change when the fixtures miss a contract assumption."
        />
        <meta property="og:title" content="AI-assisted code review kit" />
        <meta
          property="og:description"
          content="A free, illustrative exercise with runnable code, a worksheet, and a worked answer."
        />
        <meta property="og:type" content="website" />
      </Head>
      <SimpleLayout
        title="AI-assisted code review kit"
        intro="A small, free exercise for separating what passing tests establish from the assumptions a change adds to an integration."
      >
        <div className="space-y-8 text-base text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">The exercise</h2>
            <p className="mt-3">
              A shipment mapper passes its existing fixtures, but the proposed change supplies a default when a partner omits a field. The learner has the contract, fixtures, and diff, then has to identify which assumption still needs evidence.
            </p>
            <p className="mt-3">
              The kit includes runnable JavaScript, a worksheet, a worked answer, and a facilitator guide. It is complete without a subscription or account.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">What it helps you discuss</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Which cases the current fixtures actually cover.</li>
              <li>Which missing input changes the meaning of the request.</li>
              <li>Whether the next step is rejection, correction, or review.</li>
              <li>What evidence would change the approval decision.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/60">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Download the kit</h2>
            <p className="mt-3">This is an illustrative teaching and review exercise. It is not a production integration library or a claim about a particular team or system.</p>
            <a
              href="/resources/review-kit.zip"
              download
              className="mt-5 inline-block rounded-md bg-zinc-800 px-4 py-3 font-semibold text-white hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-zinc-700"
            >
              Download the review kit (ZIP)
            </a>
          </section>
          <p>
            For teams that want facilitated discussion, see the{' '}
            <Link href="/workshops/ai-assisted-code-review" className="text-teal-700 underline dark:text-teal-400">
              workshop interest details
            </Link>
            . The page describes an interest enquiry only; it does not reserve a date or accept payment.
          </p>
        </div>
      </SimpleLayout>
    </>
  )
}
