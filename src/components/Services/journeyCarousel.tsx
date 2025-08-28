import { useEffect, useRef, useState } from 'react';
import useMedia from 'use-media';

import { JourneyList } from '@/constants/Journey';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import Card from '../ui/card';

const CarouselJourney = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const IsLarge = useMedia({ minWidth: '1024px' });
  const totalItems = JourneyList.length;
  const itemWidth = IsLarge ? 564 : 361; // Width of each item in pixels
  const ItemGap = IsLarge ? 20 : 20;
  const handleNext = () => {
    console.log('next');
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const scroll = scrollRef.current;
    if (!carousel) return;
    if (!scroll) return;

    scroll.style.width = `${(currentIndex + 1) * (1200 / totalItems)}px`;
    scroll.style.transition = 'width 0.5s ease-in-out';

    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * (itemWidth + ItemGap)}px)`;

    // Handle seamless looping
    const resetPosition = () => {
      carousel.style.transition = 'none';
      if (currentIndex === totalItems) {
        setCurrentIndex(0);
        carousel.style.transform = `translateX(-${itemWidth}px)`;
      } else if (currentIndex === -1) {
        setCurrentIndex(totalItems - 1);
        carousel.style.transform = `translateX(-${(totalItems - 1) * itemWidth}px)`;
      }
      // Re-enable transition after reset
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    };

    // Trigger reset after transition ends
    const handleTransitionEnd = () => {
      if (currentIndex === totalItems || currentIndex === -1) {
        resetPosition();
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);

    return () =>
      carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, totalItems]);

  return (
    <div className={`relative flex w-full flex-col gap-5 md:gap-12`}>
      {/*flex flex-col gap-6 md:gap-12*/}
      <div className='relative overflow-hidden'>
        {/* Content */}
        <div
          ref={carouselRef}
          className='flex'
          style={{
            display: 'flex',
            gap: `${ItemGap}px`,
            width: `${itemWidth * JourneyList.length}px`,
          }}
        >
          {JourneyList.map((item, index) => (
            <div
              key={index}
              className={cn(
                'to-primary-300/50 relative flex snap-start items-center justify-center from-black from-0% to-100% p-0.5 transition-all duration-500 ease-in-out hover:bg-gradient-to-br',
                `mr-[${ItemGap}px]`
              )}
              id='carousel-item'
            >
              <Card {...item} className='bg-black' />
              <div className='bg-primary-300 absolute top-0 left-0 h-17 w-0.75 translate-y-6' />
            </div>
          ))}
        </div>
      </div>
      {/* Line */}
      <div className='relative'>
        <div ref={scrollRef} className='h-1 rounded-full bg-white' />
        <div className='absolute top-0 z-5 hidden w-full border border-neutral-900 md:block' />
      </div>
      {/* Buttons */}
      <div className='flex gap-3'>
        <Button
          id='prevBtn'
          variant={'carousel'}
          size={'carousel'}
          onClick={() => handlePrev()}
        >
          Prev
        </Button>
        <Button
          id='nextBtn'
          variant={'carousel'}
          size={'carousel'}
          onClick={() => handleNext()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CarouselJourney;
