import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Mike Dabydeen
        </h1>

        <p className={styles.description}>
          I am a tech leader
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://twitter.com/_firelinks" className={styles.card}>
            <h3>Twitter &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/mdabydeen"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Experience Web Developers </a>
      </footer>
    </div>
  )
}

