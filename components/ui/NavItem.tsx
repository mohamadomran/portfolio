import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from 'next/link'
import { Props } from '@/types/Props'

export const NavItem = ({ href, children }: { href: string } & Props) => {
    const router = useRouter()
    let isActive = router.pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-primary'
                        : 'hover:link-hover'
                )}
            >
                {children}
                {isActive && (
                    <span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r" />
                )}
            </Link>
        </li>
    )
}
