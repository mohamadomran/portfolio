import React from 'react';
import Head from 'next/head';
import { Resume } from '@/components/ui/Resume';
import { Container } from '@/components/Container';

import { WORK_SEO_TITLE, WORK_SEO_DESCRIPTION } from '@/Utils/constants';

export default function Work() {
    return (
        <>
            <Head>
                <title>{WORK_SEO_TITLE}</title>
                <meta name='description' content={WORK_SEO_DESCRIPTION} />
                <meta property='og:title' content={WORK_SEO_TITLE} />
                <meta property='og:description' content={WORK_SEO_DESCRIPTION} />
            </Head>
            <Container className='mt-24 md:mt-28'>
                <div className='flex flex-col items-center justify-center my-6'>
                    <Resume />
                </div>
            </Container>
        </>
    );
}
