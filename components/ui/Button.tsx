import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Button = {
    variant?: string
    className: string
    href?: string
    children: ReactNode
}

export function Button({ variant = 'primary', className, href, ...props }: Button) {
    className = clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        className
    )

    return href ? (
        <Link href={href} className={className} {...props} />
    ) : (
        <button type="submit" className={className} {...props} />
    )
}
