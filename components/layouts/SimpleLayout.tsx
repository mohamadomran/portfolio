import { ReactNode } from 'react'
import { Container } from '@/components/Container'
import { twMerge } from 'tailwind-merge'

type SimpleLayout = {
    title: string
    children: ReactNode
    gradient: string
}

export function SimpleLayout({
    title,
    children,
    gradient,
}: SimpleLayout) {
    return (
        <Container className='mt-16 sm:mt-32'>
            <header className='max-w-2xl'>
                <h1
                    className={twMerge(`
                        text-4xl
                        font-bold
                        tracking-tight
                        text-zinc-800
                        dark:text-zinc-100
                        sm:text-5xl
                        ${gradient
                            ? `${gradient} bg-clip-text dark:text-transparent`
                            : ''
                        }
                    `)}>
                    {title}
                </h1>
            </header>
            <div className='mt-16 sm:mt-20'>{children}</div>
        </Container>
    )
}
