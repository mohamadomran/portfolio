import React from 'react'
import { Views } from '@/components/ui/Views'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/ui/Card'
import { Article } from 'types'

export function Article(article: Article) {
    return (
        <article
            className='rounded-2xl
            border
            border-blue-400
            p-6
            dark:border-blue-400/50'>
            <Card>
                <Card.Title href={`/writing/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <p className='flex order-first space-x-1 z-10 mb-3'>
                    <Card.Eyebrow
                        as='time'
                        dateTime={article.date}
                        decorate={false}>
                        {formatDate(article.date)}
                    </Card.Eyebrow>
                    <Views
                        slug={article.slug}
                        shouldUpdateViews={false}
                        className='text-sm text-zinc-500 dark:text-zinc-400'
                    />
                </p>
            </Card>
        </article>
    )
}
