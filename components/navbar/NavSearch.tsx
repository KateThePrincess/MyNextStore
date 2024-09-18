'use client';
import { Input } from '../ui/input';
import { Button } from '@/components/ui/button';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function NavSearch({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <div className={cn(className, 'w-full max-w-sm items-center space-x-2')}>
      <Input
        type='search'
        placeholder='search product...'
        className='max-w-xs dark:bg-muted '
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <Button
        type='submit'
        variant='outline'
        size='icon'
        className='capitalize flex items-center '
        onClick={handleSearch}
      >
        <RxMagnifyingGlass className='h-[1.2rem] w-[1.2rem]' />
      </Button>
    </div>
  );
}
