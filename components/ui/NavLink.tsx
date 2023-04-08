import React, { ReactNode } from 'react'
import Link from 'next/link'


export const NavLink = ({ href, children }: { href: string; children: ReactNode} ) => {
    return (
        <Link
            href={href}
            className="transition text-primary hover:link-hover"
        >
            {children}
        </Link>
    )
}
