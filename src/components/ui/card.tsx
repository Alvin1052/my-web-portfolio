import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  year: string;
  description: string;
  companyImage: string | StaticImageData;
  className?: string;
}
const Card: React.FC<CardProps> = ({
  companyImage,
  description,
  title,
  year,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full flex-col justify-center gap-5 border border-neutral-900 p-5',
        className
      )}
    >
      {/* Position */}
      <div className='flex w-full items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-md-bold md:text-xl-bold text-neutral-25'>
            {title}
          </h3>
          <p className='text-sm-regular md:text-md-regular text-neutral-25'>
            {year}
          </p>
        </div>
        <Image src={'/icons/briefcase.svg'} alt='icon' width={30} height={30} />
      </div>
      {/* Line */}
      <div className='w-full border border-neutral-900' />
      {/* description */}
      <div className='text-sm-regular md:text-md-regular text-justify text-neutral-400'>
        {description}
      </div>
      {/* Company */}
      <div className='relative h-12'>
        <Image
          src={companyImage}
          alt={title}
          fill
          className='right-0 max-w-[200px] object-contain'
        />
      </div>
    </div>
  );
};

export default Card;
