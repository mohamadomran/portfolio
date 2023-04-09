import React from 'react'
import Head from 'next/head'
import { Resume } from '@/components/ui/Resume'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'

import { WORK_SEO_TITLE, WORK_SEO_DESCRIPTION } from '@/utils/constants'

export default function Work() {
    return (
        <>
            <Head>
                <title>{WORK_SEO_TITLE}</title>
                <meta name='description' content={WORK_SEO_DESCRIPTION} />
                <meta property='og:title' content={WORK_SEO_TITLE} />
                <meta
                    property='og:description'
                    content={WORK_SEO_DESCRIPTION}
                />
            </Head>
            <SimpleLayout
                title='Work Experience'
                gradient='text-5xl font-bold text-zinc-800 dark:sky-300 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-mustard-500 to-mustard-300'>
                <div className='flex flex-col items-center justify-center my-6'>
                    <Resume />
                </div>
            </SimpleLayout>
        </>
    )
}
