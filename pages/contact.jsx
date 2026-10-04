import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../components/Container'

const email = 'mdabydeen@gmail.com'
const workshopHref = `mailto:${email}?subject=AI-assisted%20code%20review%20workshop%20interest&body=Team%20or%20role%3A%0AParticipants%20or%20team%20size%3A%0AReview%20problem%3A%0AWhat%20would%20make%20the%20session%20useful%3A%0AWho%20approves%20the%20spend%20(optional)%3A%0APreferred%20timing%3A%0AAnything%20else%3A%0A`
const systemsHref = `mailto:${email}?subject=AI%20systems%20or%20software%20product%20enquiry&body=What%20are%20you%20building%20or%20reviewing%3A%0AWhat%20decision%20or%20boundary%20needs%20evidence%3A%0AWhat%20have%20you%20tried%20so%20far%3A%0AWhat%20would%20make%20a%20first%20conversation%20useful%3A%0APreferred%20timing%3A%0AAnything%20else%3A%0A`
const speakingHref = `mailto:${email}?subject=Speaking%20or%20teaching%20enquiry&body=Organisation%20or%20event%3A%0AAudience%3A%0ATopic%20or%20question%3A%0APreferred%20timing%3A%0AAnything%20else%3A%0A`
const advisoryHref = `mailto:${email}?subject=Engineering%20leadership%20conversation&body=Role%20or%20organisation%3A%0AQuestion%20you%20are%20working%20through%3A%0AWhat%20would%20make%20a%20conversation%20useful%3A%0APreferred%20timing%3A%0AAnything%20else%3A%0A`

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-3 text-sm font-semibold text-white outline-offset-2 transition hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500 dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      {children}
    </a>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Mike Dabydeen</title>
        <meta
          name="description"
          content="Contact Mike Dabydeen about an engineering leadership conversation, a proposed AI-assisted code review workshop, or speaking and teaching."
        />
        <link rel="canonical" href="https://michaeldabydeen.com/contact" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Start with the question you need to answer.
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Choose the route that matches the work. A short note with the context,
            the decision in front of you, and the timing is enough to begin.
          </p>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="space-y-10">
            <section className="border-t border-zinc-200 pt-6 dark:border-zinc-700/60">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Review an AI-assisted change with your team
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                The proposed private workshop uses one bounded review problem to
                examine evidence, ownership, and what should happen when a change
                does not meet the team&apos;s expectations.
              </p>
              <p className="mt-5">
                <ContactLink href={workshopHref}>Ask about the workshop</ContactLink>
              </p>
            </section>

            <section id="systems-evaluation" className="border-t border-zinc-200 pt-6 dark:border-zinc-700/60">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Examine a software product or AI systems boundary
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                If you are working through routing, fallback, agent controls, or review evidence, share the decision and the constraint. I can start by examining the question; an enquiry does not promise a product engagement or a particular outcome.
              </p>
              <p className="mt-5">
                <ContactLink href={systemsHref}>Discuss an evaluation</ContactLink>
              </p>
            </section>

            <section className="border-t border-zinc-200 pt-6 dark:border-zinc-700/60">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Invite a talk or teaching session
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Share the audience, the question they are carrying, and the setting.
                I can outline a session that fits the room and the decision you want
                people to take away.
              </p>
              <p className="mt-5">
                <ContactLink href={speakingHref}>Discuss a talk</ContactLink>
              </p>
            </section>

            <section className="border-t border-zinc-200 pt-6 dark:border-zinc-700/60">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Talk through an engineering leadership question
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                If you are working through a delivery, architecture, or review
                decision, describe the constraint and what you have tried. That gives
                the conversation something concrete to examine.
              </p>
              <p className="mt-5">
                <ContactLink href={advisoryHref}>Start a conversation</ContactLink>
              </p>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/60">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              A useful first note
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <li>What decision or problem is in front of you?</li>
              <li>Who needs to use the answer?</li>
              <li>What timing or constraint matters?</li>
            </ul>
            <p className="mt-6 border-t border-zinc-200 pt-5 text-sm leading-6 text-zinc-500 dark:border-zinc-700/60 dark:text-zinc-400">
              An enquiry starts a conversation. It does not reserve a date or create
              a payment obligation.
            </p>
          </aside>
        </div>

        <p className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
          Prefer a direct note?{' '}
          <a
            href={`mailto:${email}`}
            className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-teal-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:text-teal-400"
          >
            {email}
          </a>
          . You can also review the <Link href="/work" className="underline underline-offset-4">work</Link>{' '}
          and <Link href="/speaking" className="underline underline-offset-4">speaking</Link> pages first.
        </p>
      </Container>
    </>
  )
}
