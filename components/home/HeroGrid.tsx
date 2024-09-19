import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';
import hero5 from '@/public/images/hero5.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const carouselImages = [hero1, hero5];

export default function HeroGrid() {
  return (
    <div className='hidden lg:block max-w-[50vw] relative'>
      <Image
        src={hero4}
        priority
        alt='hero'
        className='w-full h-[30rem] rounded-md object-cover'
      />
    </div>
  );
}
