import React from 'react'
import { Props } from '@/types/icons'
import { NavItem } from './NavItem'
import { pages } from '@/utils/constants'


export function DesktopNavigation(props: Props) {
    return (
        <nav {...props}>
            <ul className='flex rounded-full bg-white/10 px-4 text-lg font-medium shadow-lg ring-primary ring-1 backdrop-blur transition'>
                {pages.map(({ name, link }) => (
                    <NavItem key={name} href={link}>
                        {name}
                    </NavItem>
                ))}
            </ul>
        </nav>
    )
}
