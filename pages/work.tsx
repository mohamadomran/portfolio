import Head from 'next/head';

import { Layout } from '@/components/layouts/Layout';
import { Resume } from '@/components/ui/Resume';
import { WORK_SEO_DESCRIPTION, WORK_SEO_TITLE } from '@/constants/constants';

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{WORK_SEO_TITLE}</title>
        <meta name="description" content={WORK_SEO_DESCRIPTION} />
        <meta property="og:title" content={WORK_SEO_TITLE} />
        <meta property="og:description" content={WORK_SEO_DESCRIPTION} />
      </Head>

      <div className="my-6 flex flex-col items-center justify-center">
        <Resume />
      </div>
    </Layout>
  );
}
