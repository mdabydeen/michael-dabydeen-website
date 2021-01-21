import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import marked from 'marked'
import styles from '../../styles/Home.module.css'

const Post = ({ htmlString, data }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}></meta>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {data.title}
                </h1>
                <p className={styles.description}>
                    {data.description}
                </p>
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </main>
        </div>

    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts")

    if (!files) {
        return {
            notFound: true
        }
    }

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    if (!paths) {
        return {
            notFound: true
        }
    }

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const markdownWithMetadata = fs
        .readFileSync(path.join("posts", slug + ".md"))
        .toString()

    const parsedMarkdown = matter(markdownWithMetadata)

    const htmlString = marked(parsedMarkdown.content)

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}


export default Post