import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { ShareIcon } from '@/components/icons/ShareIcon';
import { SparklesIcon } from '@/components/icons/SparklesIcon';
import { Layout } from '@/components/layouts/Layout';
import {
  GITHUB_SEO_DESCRIPTION,
  GITHUB_SEO_TITLE,
} from '@/constants/constants';
import { getPinnedRepos } from '@/lib/github';
import { numberFormat } from '@/lib/numberFormat';
import type { Repo } from '@/types/Repo';

export default function Projects({ pinnedRepos }: { pinnedRepos: Repo[] }) {
  return (
    <Layout>
      <NextSeo title={GITHUB_SEO_TITLE} description={GITHUB_SEO_DESCRIPTION} />
      <div className="flex flex-col pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
          Open-soruce Projects
        </h1>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pinnedRepos.map((repo) => (
          <>
            <div className="card-compact mt-8 rounded-xl bg-primary-content shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{repo.name}</h2>
                <p>{repo.description}</p>
                <span>Primary Language: {repo.primaryLanguage.name}</span>
                <div className="card-actions justify-end">
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
            </div>
          </>
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
