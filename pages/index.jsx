import Head from "next/head";
import { Container } from "../components/Container";
import { Article } from '../components/Article'
import { ReviewKit } from '../components/ReviewKit'
import Resume from '../components/Resume'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../components/SocialIcons'

import { SocialLink } from '../components/SocialLink'
import { generateRssFeed } from '../lib/generateRssFeed'
import { listPostContent } from '../lib/getAllPosts'


const Home = ({ articles }) => {

  return (
    <>
      <Head>
        <title>
          Mike Dabydeen - Software engineering leader and educator
        </title>
        <meta
          name="description"
          content="I lead software teams and teach systems design. Writing and practical examples on API behaviour, software delivery, and reviewing automated work."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I lead software teams and teach systems design.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Mike Dabydeen, based in Toronto. I work on enterprise logistics
            APIs at Purolator Digital Lab and creator IP protection at UREEQA,
            and teach at Sheridan and Conestoga. I write about the decisions
            behind software that people need to operate and trust.
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
              href="https://www.linkedin.com/in/mdabydeen/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-16 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <section className="text-base text-zinc-600 dark:text-zinc-400">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Recent writing</h2>
              <p className="mt-4"><a href="https://dev.to/_firelinks/a-review-contract-for-an-agent-authored-pull-request-2en6" className="underline">A review contract for an agent-authored pull request</a></p>
              <p className="mt-3">A design note about scoped access, revision-bound evidence, protected checks, and recovery when an agent proposes a change. Published on DEV, 27 September 2026.</p>
              <p className="mt-4"><a href="https://dev.to/_firelinks" className="underline">Read more on DEV</a></p>
            </section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">From the archive</h2>
            {articles?.map((article) => (
              <Article key={article?.slug} article={article} />
            ))}
          </div>
          <div className="order-first space-y-10 lg:order-last lg:pl-16 xl:pl-24">
            <ReviewKit />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;


export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  const postContents = listPostContent(1, 4).map(it => it)

  return {
    props: {
      articles: postContents,
    },
  }
}
