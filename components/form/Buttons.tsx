'use client';

import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import { RxHeart, RxHeartFilled } from 'react-icons/rx';
import { LuTrash2, LuPenSquare } from 'react-icons/lu';
import { IconType } from 'react-icons/lib';

type btnSize = 'default' | 'lg' | 'sm';
type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
  icon?: IconType;
};
export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
  icon: Icon,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
      variant='outline'
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        <>
          {Icon && <Icon className='mr-2 h-4 w-4' />}
          {text}
        </>
      )}
    </Button>
  );
}

type actionType = 'edit' | 'delete';

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuPenSquare />;
      case 'delete':
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button type='submit' size='icon' variant='link' className='cursor-pointer'>
      {pending ? <ReloadIcon className='animate-spin' /> : renderIcon()}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <RxHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      {pending ? (
        <ReloadIcon className='animate-spin' />
      ) : isFavorite ? (
        <RxHeartFilled />
      ) : (
        <RxHeart />
      )}
    </Button>
  );
};

export const ProductSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        className='mt-8 capitalize w-full'
        variant='outline'
        size='lg'
      >
        sign in
      </Button>
    </SignInButton>
  );
};
