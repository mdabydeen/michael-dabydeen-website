import Head from 'next/head'
import { SimpleLayout } from '../components/SimpleLayout'

export default function Uses() {
  return (
    <>
      <Head><title>Tools - Mike Dabydeen</title><meta name="description" content="The hardware and software I use for development and writing." /></Head>
      <SimpleLayout title="Tools I use." intro="I work on a MacBook Pro with an M1 Max. These are part of my development and writing setup.">
        <ul className="max-w-2xl list-disc space-y-4 pl-5 text-base text-zinc-600 dark:text-zinc-400">
          <li>Sublime Text 4 for editing.</li>
          <li>iTerm2 for terminal work.</li>
          <li>Reflect for notes.</li>
          <li>Alfred for launching applications and finding things.</li>
        </ul>
      </SimpleLayout>
    </>
  )
}
