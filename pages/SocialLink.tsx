import Link from 'next/link'
import clsx from 'clsx'
import { IconType } from '@/types/icons'

export const SocialLink = ({
    className, href, children, icon: Icon,
}: IconType) => {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className='group flex text-md font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-zinc-500'>
                <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-500' />
                <span className='ml-4'>{children}</span>
            </Link>
        </li>
    )
}
