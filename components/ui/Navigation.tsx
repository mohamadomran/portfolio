import React, { Fragment, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { Props } from '@/types'

function MobileNavItem({ href, children }: { href: string } & Props) {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    )
}

export function MobileNavigation(props: Props) {
    return (
        <Popover {...props}>
            <Popover.Button
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-black-950/40 backdrop-blur-md dark:bg-black-950/80" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <MobileNavItem href="/">Home</MobileNavItem>
                                <MobileNavItem href="/about">About</MobileNavItem>
                                <MobileNavItem href="/work">Work</MobileNavItem>
                                <MobileNavItem href="/writing">Writing</MobileNavItem>
                                <MobileNavItem href="/projects">Projects</MobileNavItem>
                                {/* <MobileNavItem href="/snippets">Snippets</MobileNavItem> */}
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

function NavItem({ href, children }: { href: string } & Props) {
    const router = useRouter()
    let isActive = router.pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-blue-600 dark:text-yellow-300'
                        : 'hover:text-blue-700 dark:hover:text-yellow-500'
                )}
            >
                {children}
                {isActive && (
                    <span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-mustard-500/0 via-mustard-300/40 to-mustard-500/0" />
                )}
            </Link>
        </li>
    )
}

export function DesktopNavigation(props: Props) {
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-md font-medium text-zinc-800 shadow-lg shadow-mustard-800/5 ring-1 ring-mustard-200/5 backdrop-blur-md dark:bg-black-950/90 dark:text-zinc-200 dark:ring-yellow-500">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/work">Work</NavItem>
                <NavItem href="/writing">Writing</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                {/* <NavItem href="/snippets">Snippets</NavItem> */}
            </ul>
        </nav>
    )
}

export function NavLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-500"
        >
            {children}
        </Link>
    )
}
