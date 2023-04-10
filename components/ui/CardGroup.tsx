import React, { useId } from 'react';

import { CardGroupProps } from '@/types/Card';

export function CardGroup({ title, children }: CardGroupProps) {
  const id = useId();

  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
      >
        {title}
      </h2>
      <ul
        role="list"
        className="mb-16 mt-8 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {children}
      </ul>
    </section>
  );
}
