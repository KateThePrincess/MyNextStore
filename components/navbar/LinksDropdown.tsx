import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <RxHamburgerMenu className='h-[1.2rem] w-[1.2rem]' />
          {/* <span className='sr-only'>Toggle theme</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <Link href='/'>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/favorites'>Favorites</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/products'>Products</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/reviews'>Reviews</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/orders'>Orders</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
