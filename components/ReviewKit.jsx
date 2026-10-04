import Link from 'next/link'

export function ReviewKit() {
  return (
    <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Try the code review exercise</h2>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
        A shipment mapper passes its fixtures but invents a missing country.
        I put the code, worksheet, and worked answer together so you can inspect
        the assumption and make your own review decision.
      </p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Free, with no signup. This is an illustrative exercise.</p>
      <a href="/resources/review-kit.zip" download className="mt-5 inline-block rounded-md bg-zinc-800 px-4 py-3 font-semibold text-white hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-zinc-700">Download the free review kit</a>
      <p className="mt-4"><Link href="/projects" className="text-sm text-teal-700 underline dark:text-teal-400">Read about the projects</Link></p>
      <p className="mt-3"><Link href="/workshops/ai-assisted-code-review" className="text-sm text-teal-700 underline dark:text-teal-400">For teams: workshop details</Link></p>
    </section>
  )
}
