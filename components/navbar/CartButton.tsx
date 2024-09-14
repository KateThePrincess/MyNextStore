import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { PiShoppingCartLight } from 'react-icons/pi';
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <PiShoppingCartLight className='h-[1.2rem] w-[1.2rem]' />
        <span className='absolute -top-2.5 -right-2.5 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-[.7rem]'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
