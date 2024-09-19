import React from 'react';
import { FaSpa } from 'react-icons/fa6';
import { PiOfficeChairFill } from 'react-icons/pi';
import { RiHomeLine } from 'react-icons/ri';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Button
      variant='link'
      asChild
      className='relative font-bold text-xl gap-1 decoration-transparent h-full hover:scale-105 transition-transform ease-out'
    >
      <Link href='/' className='flex items-center'>
        <RiHomeLine className='text-4xl text-primary' />
        <span className='hidden sm:block'>/comfy</span>
      </Link>
    </Button>
  );
}
