import { notFound } from 'next/navigation';

import { HomePage } from '@/components/pages/home/HomePage';
import { HomePagePreview } from '@/components/pages/home/HomePagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getHomePage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export default async function IndexRoute() {
  const token = getPreviewToken();
  const data = (await getHomePage({ token })) || {
    title: '',
    overview: [],
    showcaseProjects: [],
  };

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <HomePage data={data} />
              </PreviewWrapper>
            }
          >
            <HomePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <HomePage data={data} />
      )}
    </>
  );
}
