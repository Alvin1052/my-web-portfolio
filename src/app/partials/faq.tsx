import { MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useMedia from 'use-media';

import { Button } from '@/components/ui/button';

import { FaqList } from '@/constants/Faqlist';
import { cn } from '@/lib/utils';

const Faq = () => {
  const IsLarge: boolean = useMedia({ minWidth: '1024px' });
  const cardRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth: number = 252;
  const itemGap: number = 20;
  const totalItems: number = FaqList.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    console.log('next');
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;
    carousel.style.transition = 'transform 0.5s ease-in-out';

    {
      !IsLarge &&
        carousel.style.transform ==
          `translateX(-${currentIndex * (itemWidth + itemGap)}px)`;
    }
  });
  return (
    <section
      id='faq'
      className='custom-container flex items-center justify-center md:overflow-hidden'
    >
      <div className='flex flex-col gap-6 py-10 md:w-300 md:gap-12 md:py-20'>
        {/* Title */}
        <div className='flex w-full flex-col items-start gap-6.25 md:flex-row md:items-center md:justify-between'>
          {/* Text Title */}
          <div>
            <div className='display-md-bold md:display-xl-bold text-neutral-25'>
              Still got Question
            </div>
            <div className='text-sm-regular md:text-lg-medium mt-2 items-center text-neutral-400 md:mt-4'>
              I’ve listed answers to questions I often get as a frontend
              developer.
            </div>
          </div>
          {/* Button */}
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
        {/* FAQ */}
        <div className='flex'>
          <div
            ref={carouselRef}
            className={`flex flex-wrap md:h-116.5 md:gap-[${itemGap}px] md:w-[${totalItems * itemWidth}px] transition-all duration-500 ease-in-out`}
          >
            {FaqList.map((item, index) => (
              <div
                ref={cardRef}
                id={`card-${index}`}
                key={index}
                className={cn(
                  `group hover:bg-primary-400 cursor-pointer mr-[${itemGap}px] flex w-full flex-col justify-between gap-4 border-2 border-neutral-900 p-5 transition-all duration-300 ease-in-out hover:w-94.75 md:w-63`,
                  { 'bg-primary-400 md:w-94.75': index === currentIndex }
                )}
              >
                {/* Upper */}
                <div className='flex w-full justify-between'>
                  <Image
                    src={'/images/Profile-faq.png'}
                    alt={'faq-icon'}
                    width={80}
                    height={80}
                    className={cn(
                      'hidden transition-all duration-300 ease-in-out group-hover:block',
                      { block: index === currentIndex }
                    )}
                  />
                  <MessageSquareText />
                </div>
                {/* Lower */}
                <div className='flex flex-col gap-3'>
                  <div className='display-sm-semibold text-neutral-25'>
                    {item.question}
                  </div>
                  <div
                    className={cn(
                      'text-md-medium text-neutral-25 hidden group-hover:block',
                      { block: index === currentIndex }
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
