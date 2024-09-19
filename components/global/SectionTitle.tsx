import React from 'react';
import { Separator } from '../ui/separator';
import { IconBaseProps, IconType } from 'react-icons/lib';
export default function SectionTitle({
  text,
  Icon,
}: {
  text: string;
  Icon?: IconType;
}) {
  return (
    <div>
      <div className='relative flex gap-x-4 text-3xl font-semibold capitalize mb-8 items-center text-muted-foreground '>
        {Icon && <Icon className='text-secondary text-4xl' />}
        <h2 className=''>{text}</h2>
      </div>
      <Separator />
    </div>
  );
}
