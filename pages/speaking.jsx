import Head from 'next/head'
import Link from 'next/link'
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
            <p className="mt-4"><a href="https://michaeldabydeen.com/articles/when-the-revision-changes-the-approval-expires" className="underline">Read the revision-bound approval article</a>, then <a href="https://github.com/mdabydeen/stopline/blob/main/docs/team-evaluation-guide.md" className="underline">use the team evaluation guide</a> to examine one boundary. The <a href="https://github.com/mdabydeen/stopline" className="underline">experimental Stopline repository</a> contains the implementation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Measuring a local-first coding agent</h2>
            <p className="mt-4">Use a small command-line agent as a case study in boundary design: what the tool can observe, which actions it may propose, and what evidence remains after a run.</p>
            <p className="mt-4"><a href="https://github.com/mdabydeen/metron/releases/tag/v0.1.0" className="underline">Read the experimental Metron release notes</a>.</p>
          </section>
          <p>For a private team session applying the review exercise to a real process, see the <Link href="/workshops/ai-assisted-code-review" className="underline">workshop interest page</Link>.</p>
          <p>To discuss a session, <a href="https://www.linkedin.com/in/mdabydeen/" className="underline">contact me on LinkedIn</a> or <a href="mailto:mdabydeen@gmail.com" className="underline">email me</a>.</p>
        </div>
      </SimpleLayout>
    </>
  )
}
