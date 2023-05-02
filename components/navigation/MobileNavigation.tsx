'use client';

import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon';
import { CloseIcon } from '@/components/icons/CloseIcon';
import { pages } from '@/constants/constants';
import { Props } from '@/types/Props';

import { MobileNavItem } from './MobileNavItem';

export function MobileNavigation(props: Props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-base-100/70 px-4 py-2 text-sm font-medium  shadow-lg ring-1 ring-secondary backdrop-blur">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-white" />
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
          <Popover.Overlay className="z-100 fixed inset-0 bg-base-100/30 backdrop-blur" />
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
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-base-100/90 p-8  ring-1 ring-secondary"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 " />
              </Popover.Button>
              <h2 className="text-sm font-medium ">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-secondary text-base ">
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
  );
}
