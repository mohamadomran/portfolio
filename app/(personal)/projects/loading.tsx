'use client';

import { Card, Skeleton } from '@nextui-org/react';
import { Header } from 'components/shared/Header';

export default function Loading() {
  return (
    <div className="space-y-20">
      <Header title="Explore My Work" />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {[...Array(3)].map((_, key) => (
          <div key={key} className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          </div>
        ))}
        JH
      </div>
    </div>
  );
}
