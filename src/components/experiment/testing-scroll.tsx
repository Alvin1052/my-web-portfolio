import Image from 'next/image';
import React from 'react';

import { ToolItems } from '@/constants/tools';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';

const TestingScroll = () => {
  return (
    <div>
      <ScrollArea className='flex h-132.5 w-160.5 flex-col gap-6'>
        <div className='flex flex-col gap-3.75'>
          {ToolItems.map((item, i) => (
            <div key={item.name} className='flex flex-col gap-3.75'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-0.75'>
                  <div className='flex-center size-15 p-[12.5px]'>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={35}
                      height={35}
                    />
                  </div>
                  <div>{item.name}</div>
                </div>
                <span>{item.percentage} %</span>
              </div>
              {i !== ToolItems.length - 1 && (
                <div className='w-full border border-neutral-900' />
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation='vertical' className='absolute -left-6' />
      </ScrollArea>
    </div>
  );
};

export default TestingScroll;
