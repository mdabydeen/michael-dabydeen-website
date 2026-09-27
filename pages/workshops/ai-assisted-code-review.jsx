import Head from 'next/head'
import { SimpleLayout } from '../../components/SimpleLayout'

export default function AiAssistedCodeReviewWorkshop() {
  const title = 'AI-assisted code review workshop - Mike Dabydeen'
  const description = 'A proposed private team workshop for reviewing AI-assisted changes, with a bounded exercise, draft checklist, and ownership questions.'
  const url = 'https://michaeldabydeen.com/workshops/ai-assisted-code-review'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://michaeldabydeen.com/images/portrait.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <SimpleLayout
        title="Build shared review expectations for AI-assisted changes."
        intro="A proposed private workshop for engineering teams that want to examine what evidence is sufficient before approving a change."
      >
        <div className="max-w-2xl space-y-10 text-base text-zinc-600 dark:text-zinc-400">
          <p className="rounded-2xl border border-zinc-200 p-6 text-sm dark:border-zinc-700">
            This is an interest enquiry, not a booking or checkout. The pilot fee,
            timing, and availability are confirmed separately after a short fit
            conversation.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">The proposed format</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>One remote 90-minute session for up to eight participants.</li>
              <li>A preparation questionnaire focused on one review problem.</li>
              <li>A worked exercise, draft review checklist, and ownership questions.</li>
              <li>A 30-minute follow-up to discuss one bounded process experiment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Who it fits</h2>
            <p className="mt-4">
              This is designed for an engineering manager, platform lead, or
              technical lead who has one review problem the team can examine
              together and authority to try a small process change afterward.
              It is not a production implementation, security audit, or substitute
              for an incident response engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">What the team works through</h2>
            <p className="mt-4">
              We examine a small integration change whose fixtures pass while a
              missing field is given an unsupported default. Participants make a
              decision, compare the evidence, and identify what the team needs to
              decide before approving the change.
            </p>
            <p className="mt-4">
              The free <a href="/resources/review-kit.zip" className="underline">review kit</a> includes
              the exercise, answer, worksheet, sample team output, and facilitator guide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Pilot scope</h2>
            <p className="mt-4">
              The proposed pilot fee is <strong className="font-semibold text-zinc-800 dark:text-zinc-100">CAD 1,500 per team</strong>.
              This is a price to test for this defined scope, not a market benchmark or a guarantee of an engineering outcome.
            </p>
            <p className="mt-4">
              The session does not include production access, code implementation,
              a security audit, certification, indefinite coaching, or a promise of
              faster delivery or fewer incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Start with an interest enquiry</h2>
            <p className="mt-4">
              Tell me who would attend, where review currently gets difficult, and
              when you would like to explore a session. I will confirm fit, timing,
              and written terms before any booking is made.
            </p>
            <p className="mt-6">
              <a
                href="mailto:mdabydeen@gmail.com?subject=AI-assisted%20code%20review%20workshop%20interest&body=Team%20or%20role%3A%0AParticipants%20or%20team%20size%3A%0AReview%20problem%3A%0AWhat%20would%20make%20the%20session%20useful%3A%0AWho%20approves%20the%20spend%20(optional)%3A%0APreferred%20timing%3A%0AAnything%20else%3A%0A"
                className="inline-block rounded-md bg-zinc-800 px-4 py-3 font-semibold text-white hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-zinc-700"
              >
                Enquire about the workshop
              </a>
            </p>
          </section>
        </div>
      </SimpleLayout>
    </>
  )
}
