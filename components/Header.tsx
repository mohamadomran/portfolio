import { MobileNavigation } from "./ui/MobileNavigation"
import { DesktopNavigation } from "./ui/DesktopNavigation"

export function Header() {
    return (
        <>
            <header className='pointer-events-none relative sticky top-0'>
                <div className='flex md:justify-center justify-end top-0 z-10 h-16 pt-6 md:pb-24 pb-16 pr-12 md:pr-0'>
                    <DesktopNavigation className='pointer-events-auto hidden md:block' />
                    <MobileNavigation className='pointer-events-auto md:hidden' />
                </div>
            </header>
        </>
    )
}
