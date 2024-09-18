import React from 'react';
import { FaSpa } from 'react-icons/fa6';
import { PiOfficeChairFill } from 'react-icons/pi';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function Logo() {
  return (
    <Button
      variant='link'
      asChild
      className='font-bold text-xl gap-1 decoration-transparent'
      size='icon'
    >
      <Link href='/'>
        <PiOfficeChairFill className='text-4xl ' />
      </Link>
    </Button>
  );
}
