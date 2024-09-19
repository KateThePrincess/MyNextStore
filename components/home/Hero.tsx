import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroGrid from './HeroGrid';

export default function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center '>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl sm:text-6xl'>
          <span className='text-primary'>Redefine</span> Your Living Experience.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Step into a world of exquisite furniture crafted to enhance your
          lifestyle. From sleek and modern to classic and cozy, find the perfect
          pieces to reflect your personal style.
        </p>
        <Button asChild size='lg' className='mt-10' variant='outline'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      {/* <HeroCarousel /> */}
      <HeroGrid />
    </section>
  );
}
