import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ShareIcon } from '@/components/icons/ShareIcon';
import { SparklesIcon } from '@/components/icons/SparklesIcon';
import { Layout } from '@/components/layouts/Layout';
import { Card } from '@/components/ui/Card';
import { getPinnedRepos } from '@/lib/github';
import { numberFormat } from '@/lib/numberFormat';
import type { Repo } from '@/types/Repo';

export default function Projects({ pinnedRepos }: { pinnedRepos: Repo[] }) {
  return (
    <Layout>
      <Head>
        <title>Project - Mohamad Omran</title>
        <meta
          name="description"
          content="Open Source Projects/Tinkering: My Contributions to the Community"
        />
        <meta property="og:title" content="Projects - Mohamad Omran" />
        <meta
          property="og:description"
          content="Open Source Projects/Tinkering: My Contributions to the Community"
        />
      </Head>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {pinnedRepos.map((repo) => (
          <Card as="li" key={repo.name}>
            <h2 className="text-base font-semibold text-zinc-800 transition group-hover:text-indigo-500 dark:text-zinc-100">
              <Card.Link href={repo.url}>{repo.name}</Card.Link>
            </h2>
            <Card.Description>{repo.description}</Card.Description>
            <div className="group z-10 mt-8 flex w-full items-center space-x-16 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-between sm:space-x-0">
              <p className="flex items-center">
                <span>{repo.primaryLanguage.name}</span>
                <span
                  className="order-first mr-2 h-4 w-4 rounded-full"
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                />
              </p>
              <div className="flex space-x-6">
                <p className="flex items-center">
                  {numberFormat(repo.stargazerCount)}
                  <SparklesIcon className="order-first mr-2 h-5 w-5 fill-zinc-400 dark:fill-zinc-500" />
                </p>
                <p className="flex items-center">
                  {numberFormat(repo.forkCount)}
                  <ShareIcon className="order-first mr-2 h-5 w-5 -rotate-90 fill-zinc-400 dark:fill-zinc-500" />
                </p>
              </div>
            </div>
          </Card>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pinnedRepos: (await getPinnedRepos()).sort(
        (a, b) => b.stargazerCount - a.stargazerCount,
      ),
    },
  };
};
