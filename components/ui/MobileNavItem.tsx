import React from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { Props } from '@/types/icons'

export const MobileNavItem = ({ href, children }: { href: string}  & Props) => {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    )
}
