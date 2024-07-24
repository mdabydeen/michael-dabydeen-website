import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Card } from '../../../components/Card'
import { Pagination } from '../../../components/Pagination'
import { SimpleLayout } from '../../../components/SimpleLayout'
import {
  listPostContent,
  countPosts,
  PostContent,
} from '../../../lib/getAllPosts'
import { formatDate } from '../../../lib/formatDate'
import config from '../../../lib/config'

type Props = {
  articles: PostContent[]
  page: number
  pagination: {
    current: number
    pages: number
  }
}

type Article = {
  article: PostContent
}

function Article({ article }: Article) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles, pagination }: Props) {
  return (
    <>
      <Head>
        <title>Articles - Mike Dabydeen</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design, company building, and the computer industry."
        intro="All of my long-form thoughts on programming, leadership, blockchains, cybersecurity and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page: number) =>
              page === 1 ? '/articles' : '/articles/page/[page]',
            as: (page: number) =>
              page === 1 ? null : '/articles/page/' + page,
          }}
        />
      </SimpleLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string)
  const posts = listPostContent(page, config.posts_per_page)
  // const tags = listTags()
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      page,
      articles: posts,
      pagination,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page)
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}
