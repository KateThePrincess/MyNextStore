import { cn } from '@/lib/utils';
import React from 'react';

export default function EmptyList({
  heading = 'no items found',
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn('text-xl capitalize', className)}>{heading}</h2>;
}
