import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { Container } from './Container'
import { MobileNavigation, DesktopNavigation } from './ui/Navigation'
import { MoonIcon } from './icons/MoonIcon'
import { SunIcon } from './icons/SunIcon'

function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none')
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none')
        }, 0)
    }

    function toggleMode() {
        disableTransitionsTemporarily()

        let darkModeMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        )
        let isSystemDarkMode = darkModeMediaQuery.matches
        let isDarkMode = document.documentElement.classList.toggle('dark')

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode
        } else {
            window.localStorage.isDarkMode = isDarkMode
        }
    }

    return (
        <button
            type='button'
            aria-label='Toggle dark mode'
            className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-black-950/10 dark:ring-white/10 dark:hover:ring-white/20'
            onClick={toggleMode}>
            <SunIcon className='h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-indigo-50 [@media(prefers-color-scheme:dark)]:stroke-indigo-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-indigo-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-indigo-600' />
            <MoonIcon className='hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-indigo-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-indigo-500' />
        </button>
    )
}

export function Header() {
    const router = useRouter()
    const isHomePage = router.pathname === '/'

    const headerRef = useRef<HTMLDivElement>(null)

    const headerPosition: Object = {
        position: 'var(--header-position)',
    }
    const headerInnerPosition: Object = {
        position: 'var(--header-inner-position)',
    }

    return (
        <>
            <header
                className='pointer-events-none relative z-50 flex flex-col sticky top-0'
                style={{
                    height: 'var(--header-height)',
                    marginBottom: 'var(--header-mb)',
                }}>
                {isHomePage && (
                    <>
                        <div
                            className='order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]'
                        />
                        <Container
                            className='top-0 order-last -mb-3 pt-3'
                            style={{ position: 'var(--header-position)' }}>
                            <div
                                className='top-[var(--avatar-top,theme(spacing.3))] w-full'
                                style={headerInnerPosition}>
                                <div className='relative'></div>
                            </div>
                        </Container>
                    </>
                )}
                <div
                    ref={headerRef}
                    className='top-0 z-10 h-16 pt-6'
                    style={headerPosition}>
                    <Container
                        className='top-[var(--header-top,theme(spacing.6))] w-full'
                        style={{ position: 'var(--header-inner-position)' }}>
                        <div className='relative flex gap-4'>
                            <div className='flex flex-1'></div>
                            <div className='flex flex-1 justify-end md:justify-center'>
                                <MobileNavigation className='pointer-events-auto md:hidden' />
                                <DesktopNavigation className='pointer-events-auto hidden md:block' />
                            </div>
                            <div className='flex justify-end md:flex-1'>
                                {/* <div className='pointer-events-auto'>
                                    <ModeToggle />
                                </div> */}
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    )
}
