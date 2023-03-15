import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CtaProps = {
    icon: ElementType
    title: String
    children: ReactNode
    className?: string
}

export function Cta({ icon: Icon, title, children, className }: CtaProps) {
    return (
        <div className={twMerge(`
            rounded-2xl
            border
            border-blue-400
            p-6
            dark:border-blue-400/50
            ${className ?? ""}
        `)}>
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Icon className="h-6 w-6 flex-none" />
                <span className="ml-3">{title}</span>
            </h2>
            {children}
        </div>
    )
}
