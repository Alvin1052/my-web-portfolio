import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

import Section from '@/components/Layout/Section';
import Card from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { ScrollBar } from '@/components/ui/scroll-area';

import { JourneyList } from '@/constants/Journey';

const Journey = () => {
  return (
    <div>
      <Section
        title='My Journey in Tech'
        subtitle='From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.'
        id='journey'
        position='left'
        container={true}
        className='relative w-full'
      >
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
      </Section>
    </div>
  );
};

export default Journey;
