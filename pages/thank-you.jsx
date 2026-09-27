import Head from 'next/head'

import { SimpleLayout } from '../components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Newsletter unavailable - Mike Dabydeen</title>
        <meta
          name="description"
          content="Newsletter signup is unavailable. The review kit remains free to download."
        />
      </Head>
      <SimpleLayout
        title="Newsletter signup is unavailable."
        intro="No subscription is confirmed by this page. You can download the complete free review kit from the Projects page, or follow my writing on DEV."
      />
    </>
  )
}
