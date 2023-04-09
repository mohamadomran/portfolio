import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { Props } from '@/types/Props'
import { MobileNavItem } from './MobileNavItem'
import { pages } from '@/constants/constants'

export function MobileNavigation(props: Props) {
    return (
        <Popover {...props}>
            <Popover.Button className='group flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur'>
                Menu
                <ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700' />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <Popover.Overlay className='fixed inset-0 z-100 bg-black-950/40 backdrop-blur dark:bg-black-950/80' />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'>
                    <Popover.Panel
                        focus
                        className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                        <div className='flex flex-row-reverse items-center justify-between'>
                            <Popover.Button
                                aria-label='Close menu'
                                className='-m-1 p-1'>
                                <CloseIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
                            </Popover.Button>
                            <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                                Navigation
                            </h2>
                        </div>
                        <nav className='mt-6'>
                            <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                                {pages.map(({ name, link }) => (
                                    <MobileNavItem key={name} href={link}>
                                        {name}
                                    </MobileNavItem>
                                ))}
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}
