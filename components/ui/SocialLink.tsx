import Link from 'next/link';
import { ElementType } from 'react';

type SocialLink = {
    href: string;
    ariaLabel: string;
    icon: ElementType;
    className?: string;
};

export function SocialLink({
    icon: Icon,
    href,
    ariaLabel,
    className,
}: SocialLink) {
    return (
        <Link className='group my-4' href={href} aria-label={ariaLabel}>
            <Icon
                className='w-6 h-6
                fill-white
                transition
                group-hover:fill-primary'
            />
        </Link>
    );
}
