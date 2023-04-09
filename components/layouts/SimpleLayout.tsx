import { twMerge } from 'tailwind-merge';
import { SimpleLayout } from '@/types/SimpleLayout';

export function SimpleLayout({ title, children, gradient }: SimpleLayout) {
  return (
    <>
      <header className="max-w-2xl">
        <h1
          className={twMerge(`
                        text-4xl
                        font-bold
                        tracking-tight
                        text-zinc-800
                        dark:text-zinc-100
                        sm:text-5xl
                        ${
                          gradient
                            ? `${gradient} bg-clip-text dark:text-transparent`
                            : ''
                        }
                    `)}
        >
          {title}
        </h1>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </>
  );
}
