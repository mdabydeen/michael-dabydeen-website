import Head from "next/head";
import { Container } from "../components/Container";
import { Article } from '../components/Article'
import { Newsletter } from '../components/Newsletter'
import Resume from '../components/Resume'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../components/SocialIcons'

import { SocialLink } from '../components/SocialLink'
// import { Photos } from '../components/Photos'

import { generateRssFeed } from '../lib/generateRssFeed'
// import { getAllArticles } from '../lib/getAllArticles'
import { listPostContent } from '../lib/getAllPosts'


const Home = ({ articles }) => {

  // console.log('ARTICLES =>', articles)

  return (
    <>
      <Head>
        <title>
          Mike Dabydeen - Software engineering leader, founder, Web3, blockchain
          &amp; open source enthusiast
        </title>
        <meta
          name="description"
          content="I&apos;m Mike, a Software engineering leader and entrepreneur based in Toronto, Canada. I&apos;m CTO of UREEQA, where we develop technologies that empower creators to manage, monetize &amp; protect on their work."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineering leader, founder, Web3, blockchain &amp; open
            source enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Mike, a technologist, engineering leader and entrepreneur based in
            Toronto, Canada. I&apos;m CTO of UREEQA, where we develop technologies
            that empower creators to manage, monetize &amp; protect on their
            work using blockchain.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/_firelinks"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/_firelinks"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/mdabydeen"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/michaeld1"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles?.map((article) => (
              <Article key={article?.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;


export async function getStaticProps() {
  // if (process.env.NODE_ENV === 'production') {
  //   await generateRssFeed()
  // }

  const postContents = listPostContent(1, 4).map(it => it)

  // console.log(postContents)

  return {
    props: {
      // articles: (await getAllArticles())
      //   .slice(0, 4)
      //   .map(({ component, ...meta }) => meta),
      articles: postContents,
    },
  }
}
