import React from 'react';

import { JourneyList } from '@/constants/Journey';

import Card from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';

const carouselwithshadcn = () => {
  return (
    <div>
      <div className='relative w-full'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='flex flex-col gap-4 md:gap-12'
          orientation='horizontal'
        >
          {/* Content */}

          <CarouselContent className='flex w-full gap-5'>
            {JourneyList.map((item, index) => (
              <CarouselItem key={index} className='relative'>
                <Card {...item} />
                <div className='bg-primary-300 absolute top-0 h-17 w-0.75 translate-y-6' />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Line */}

          <div className='hidden w-full border border-neutral-900 md:block' />
          {/* Buttons */}
          <div className='flex gap-3'>
            <CarouselPrevious variant={'carousel'} size={'carousel'} />
            <CarouselNext variant={'carousel'} size={'carousel'} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default carouselwithshadcn;
