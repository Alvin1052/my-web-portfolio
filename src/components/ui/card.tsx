import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  year: string;
  description: string;
  companyImage: string | StaticImageData;
}
const Card: React.FC<CardProps> = ({
  companyImage,
  description,
  title,
  year,
}) => {
  return (
    <div className='relative flex w-90.25 flex-col justify-center gap-5 border border-neutral-900 p-5 md:w-141'>
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
      <div className='text-sm-regular md:text-md-regular text-neutral-400'>
        {description}
      </div>
      {/* Company */}
      <Image
        src={companyImage}
        alt={title}
        width={100}
        height={100}
        className='h-12'
      />
    </div>
  );
};

export default Card;
