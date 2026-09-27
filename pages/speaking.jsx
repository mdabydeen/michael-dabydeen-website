import Head from 'next/head'
import { SimpleLayout } from '../components/SimpleLayout'

export default function Speaking() {
  return (
    <>
      <Head><title>Speaking - Mike Dabydeen</title><meta name="description" content="Proposed talks and practical teaching on API behaviour, agent authority, and reviewing software changes." /></Head>
      <SimpleLayout title="Engineering decisions we can examine together." intro="I teach at Sheridan and Conestoga and work on software systems. These are proposed session topics for developers and engineering leaders; format and availability can be discussed.">
        <div className="max-w-2xl space-y-12 text-base text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Reviewing an AI-assisted change</h2>
            <p className="mt-4">Work through a shipment mapper that passes its existing fixtures while introducing an unsupported default. Examine what the tests establish, identify the missing case, and explain a review decision.</p>
            <p className="mt-4"><a href="/resources/review-kit.zip" className="underline">Download the exercise and worked answer (ZIP)</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Where an agent&apos;s authority ends</h2>
            <p className="mt-4">Explore a browser-agent design in which a model classifies an action and application code decides whether it may run. Discuss approval, changing state, and what an evidence log can establish.</p>
            <p className="mt-4"><a href="https://github.com/mdabydeen/stopline" className="underline">Inspect the experimental Stopline repository</a>.</p>
          </section>
          <p>To discuss a session, <a href="https://www.linkedin.com/in/mdabydeen/" className="underline">contact me on LinkedIn</a> or <a href="mailto:mdabydeen@gmail.com" className="underline">email me</a>.</p>
        </div>
      </SimpleLayout>
    </>
  )
}
