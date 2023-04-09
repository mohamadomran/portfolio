import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Card } from '@/components/ui/Card'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { SparklesIcon } from '@/components/icons/SparklesIcon'
import { ShareIcon } from '@/components/icons/ShareIcon'
import { getPinnedRepos } from '@/lib/github'
import { numberFormat } from '@/lib/numberFormat'
import type { Repo } from '@/types/icons'

export default function Projects({ pinnedRepos }: { pinnedRepos: Repo[] }) {
    return (
        <>
            <Head>
                <title>Project - Mohamad Omran</title>
                <meta
                    name="description"
                    content="Open Source Projects/Tinkering: My Contributions to the Community"
                />
                <meta
                    property="og:title"
                    content="Projects - Mohamad Omran"
                />
                <meta
                    property="og:description"
                    content="Open Source Projects/Tinkering: My Contributions to the Community"
                />
            </Head>
            <SimpleLayout
                title="Open Source Projects/Tinkering: My Contributions to the Community"
                gradient="bg-gradient-to-r from-sky-400 to-blue-500"
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {pinnedRepos.map((repo) => (
                        <Card as="li" key={repo.name}>
                            <h2 className="text-base font-semibold transition group-hover:text-indigo-500 text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={repo.url}>{repo.name}</Card.Link>
                            </h2>
                            <Card.Description>{repo.description}</Card.Description>
                            <div
                                className="z-10 flex space-x-16 sm:space-x-0 sm:justify-between mt-8 items-center w-full group text-sm text-zinc-500 dark:text-zinc-400">
                                <p
                                    className="flex items-center">
                                    <span>{repo.primaryLanguage.name}</span>
                                    <span
                                        className="mr-2 w-4 h-4 rounded-full order-first"
                                        style={{ backgroundColor: repo.primaryLanguage.color }} />
                                </p>
                                <div className="flex space-x-6">
                                    <p className="flex items-center">
                                        {numberFormat(repo.stargazerCount)}
                                        <SparklesIcon className="order-first mr-2 w-5 h-5 fill-zinc-400 dark:fill-zinc-500" />
                                    </p>
                                    <p className="flex items-center">
                                        {numberFormat(repo.forkCount)}
                                        <ShareIcon
                                            className="order-first mr-2 w-5 h-5 fill-zinc-400 dark:fill-zinc-500 -rotate-90" />
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            pinnedRepos: (await getPinnedRepos())
                .sort((a, b) => b.stargazerCount - a.stargazerCount)
        }
    }
}
