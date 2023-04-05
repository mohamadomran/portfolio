import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Card } from '@/components/ui/Card'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { Views } from '@/components/ui/Views'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Article } from 'types/icons'

function Article({ article }: { article: Article }) {
    return (
        <article>
            <Card variant="inline">
                <Card.Title href={`/writing/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <p className="flex order-first space-x-1 z-10 mb-3 md:mb-0 md:ml-4 md:order-last flex-shrink-0">
                    <Card.Eyebrow as="time" dateTime={article.date} decorate={false}>
                        {formatDate(article.date)}
                    </Card.Eyebrow>
                    <Views slug={article.slug} shouldUpdateViews={false} className="text-sm text-zinc-500 dark:text-zinc-400" />
                </p>
            </Card>
        </article>
    )
}

export default function ArticlesIndex({ articles }: { articles: Article[] }) {
    return (
        <>
            <Head>
                <title>Writing - Mohamad Omran</title>
                <meta
                    name="description"
                    content="Digital Garden: Engineering Insights and TIL"
                />
                <meta
                    property="og:title"
                    content="Writing - Mohamad Omran"
                />
                <meta
                    property="og:description"
                    content="Digital Garden: Engineering Insights and TIL"
                />
            </Head>
            <SimpleLayout
                title="Digital Garden: Engineering Insights and TIL"
                gradient="bg-gradient-to-r from-pink-500 to-violet-500"
            >
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
                    <div className="max-w-3xl space-y-16 mt-6">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                </div>
            </SimpleLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
        }
    }
}
