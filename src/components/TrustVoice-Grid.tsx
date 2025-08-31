import Image, { StaticImageData } from 'next/image';
import React from 'react';

import TrustedVoiceList from '@/constants/TrustedVoice';
import { cn } from '@/lib/utils';

const GridRows = () => {
  return (
    <div className='relative flex flex-col gap-10'>
      <div className='flex flex-wrap gap-4 md:flex-nowrap'>
        {/* Card 1 */}
        <div className='to-primary-300 flex items-center justify-center bg-gradient-to-tl from-[#000000] from-0% to-80% p-0.25 md:w-112'>
          <Card
            {...TrustedVoiceList[0]}
            className='to-primary-300/20 w-full border-0 bg-linear-[-45deg] from-transparent from-0% to-90%'
          />
        </div>

        {/* Group */}
        <div className='flex flex-col flex-wrap gap-4 md:w-183 md:flex-nowrap'>
          {/* Card 2 */}
          <div className='w-full md:h-91.75'>
            <Card {...TrustedVoiceList[1]} index={1} />
          </div>
          {/* Group */}
          <div className='flex w-full flex-wrap gap-4 md:flex-nowrap'>
            {/* card 3 */}
            <div className='w-full'>
              <Card {...TrustedVoiceList[2]} />
            </div>
            {/* Card 4 */}
            <div className='w-full'>
              <Card {...TrustedVoiceList[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title?: string;
  subtitle?: string;
  star: number;
  description: string;
  profileImage: string | StaticImageData;
  ProfileName: string;
  profileJob: string;
  className?: string;
  index?: number;
}
const Card: React.FC<CardProps> = ({ index, className, ...item }) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col justify-between gap-6 border border-neutral-900 bg-black p-5 md:gap-0',
        className
      )}
    >
      {/* Description */}
      <div className='flex flex-col gap-2'>
        {item.title !== '' && (
          <div className='md:display-lg-bold display-sm-bold'>{item.title}</div>
        )}
        <div
          className={cn(
            'md:display-xs-bold text-lg-bold',
            index !== 0 && 'text-lg-semibold'
          )}
        >
          {item.subtitle}
        </div>
        <div className='flex gap-0.5 md:gap-1'>
          {Array(item.star)
            .fill(0)
            .map((_, index) => (
              <div key={index} className='size-4 md:size-6'>
                ⭐️
              </div>
            ))}
        </div>
        <p className='text-sm-regular md:text-md-regular'>{item.description}</p>
      </div>
      {/* Profile */}
      <div className='flex items-end justify-between'>
        {/* Profile Details */}
        <div className='flex flex-col gap-4'>
          <Image
            src={item.profileImage}
            alt={item.ProfileName}
            width={48}
            height={48}
          />
          <div>
            <div className='text-sm-semibold md:text-md-semibold'>
              {item.ProfileName}
            </div>
            <div className='text-sm-regular md:text-md-regular'>
              {item.profileJob}
            </div>
          </div>
        </div>
        {/* Quotes */}
        <Image
          src={'/icons/quote-icon.svg'}
          alt='quote'
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default GridRows;
