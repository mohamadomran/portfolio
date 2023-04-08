import React, { ReactNode } from 'react'
import Link from 'next/link'


export const NavLink = ({ href, children }: { href: string; children: ReactNode} ) => {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-500"
        >
            {children}
        </Link>
    )
}
