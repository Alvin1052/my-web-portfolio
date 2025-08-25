import Image, { StaticImageData } from 'next/image';
import React from 'react';

import TrustedVoiceList from '@/constants/TrustedVoice';
import { cn } from '@/lib/utils';

const GridRows = () => {
  return (
    <div className='relative flex flex-col gap-10'>
      <div className='flex gap-4'>
        {/* Card 1 */}
        <div className='to-primary-300 flex w-112 items-center justify-center bg-gradient-to-tl from-[#000000] from-0% to-80% p-0.25'>
          <Card
            {...TrustedVoiceList[0]}
            className='to-primary-300/20 w-full border-0 bg-linear-[-45deg] from-transparent from-0% to-90%'
          />
        </div>

        {/* Group */}
        <div className='flex w-184 flex-col gap-4'>
          {/* Card 2 */}
          <div className='h-91.75 w-full'>
            <Card {...TrustedVoiceList[1]} index={1} />
          </div>
          {/* Group */}
          <div className='flex w-full gap-4'>
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
        'flex h-full w-full flex-col justify-between border border-neutral-900 bg-black p-5',
        className
      )}
    >
      {/* Description */}
      <div className='flex flex-col gap-2'>
        {item.title !== '' && (
          <div className='display-lg-bold'>{item.title}</div>
        )}
        <div
          className={cn('display-xs-bold', index === 1 && 'text-lg-semibold')}
        >
          {item.subtitle}
        </div>
        <div className='flex gap-1'>
          {Array(item.star)
            .fill(0)
            .map((_, index) => (
              <div key={index}>⭐️</div>
            ))}
        </div>
        <p className='text-md-regular bg-red-300 text-start'>
          {item.description}
        </p>
        <p className='text-md-regular max-w-[692px]!'>
          Edwin's expertise in frontend development is remarkable. He brings
          creativity and innovation to the table, ensuring that every project is
          not only functional but also visually appealing.
        </p>
      </div>
      {/* Profile */}
      <div className='flex items-end justify-between'>
        <div className='flex flex-col gap-4'>
          <Image
            src={item.profileImage}
            alt={item.ProfileName}
            width={48}
            height={48}
          />
          <div>
            <div className='text-md-semibold'>{item.ProfileName}</div>
            <div className='text-md-regular'>{item.profileJob}</div>
          </div>
        </div>
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
