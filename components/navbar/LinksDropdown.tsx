import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { RxHamburgerMenu, RxEnter, RxAccessibility } from 'react-icons/rx';

import Link from 'next/link';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserProfile,
} from '@clerk/nextjs';

import SignOutLink from './SignOutLink';

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w[100px]'>
          <RxHamburgerMenu className='h-[1.2rem] w-[1.2rem]' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left capitalize flex gap-2 items-center'>
                <RxEnter />
                login
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left capitalize flex gap-2 items-center'>
                <RxAccessibility />
                register
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className='capitalize flex gap-2 items-center'
                >
                  <link.icon />
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
