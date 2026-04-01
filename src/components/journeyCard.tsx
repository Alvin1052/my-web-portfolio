import { Journey } from '@/constants/Journey';
import { cn } from '@/lib/utils';
import React from 'react';
import Card from './ui/card';

interface JourneyCardProps {
  item: Journey;
  itemWidth: number;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ item, itemWidth }) => {
  return (
    <div
      className={cn(
        'to-primary-300/50 relative flex w-full snap-start items-center justify-center from-black from-0% to-100% p-0.5 hover:bg-gradient-to-br',
        ` max-w-[${itemWidth}px]`
      )}
      id='carousel-item'
    >
      <Card {...item} className='h-full w-full bg-black' />
      <div className='bg-primary-300 absolute top-0 left-0 h-17 w-0.75 translate-y-6' />
    </div>
  );
};

export default JourneyCard;
