import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import styles from '../../styles/Home.module.css'

function Blog({ slugs }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                {slugs.map(slug => {

                    return (
                        <div key={slug}>
                            <Link href={"/blog/" + slug}>
                                <a>{"/blog/" + slug}</a>
                            </Link>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}


export const getStaticProps = async (context) => {
    const files = fs.readdirSync("posts");

    if (!files) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            slugs: files.map(filename => filename.replace(".md", ""))
        }
    }

}


export default Blog