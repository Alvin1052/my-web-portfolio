import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { ToolItems } from '@/constants/tools';
import Link from 'next/link';

const UsedTools = () => {
  return (
    <section id='tools' className='custom-container py-10 md:py-20'>
      <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
        {/* Description */}
        <div className='flex flex-col justify-between gap-6 md:h-[529px]'>
          <div className='flex max-w-91.75 flex-col gap-2 md:gap-4'>
            <h1 className='lg:display-2xl-bold md:display-xl-bold display-md-bold text-white'>
              Tools I Use to Build
            </h1>
            <p className='text-md-regular text-neutral-400'>
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>
          <Link href='#contact' className='w-full'>
            <Button className='h-14 w-full'>
              <Image
                src={'/icons/mail.svg'}
                alt='mail'
                width={16}
                height={16}
              />
              Send Message
            </Button>
          </Link>
        </div>
        {/* Scroll */}

        <Tools />
      </div>
    </section>
  );
};

const Tools = () => {
  return (
    <ScrollArea className='flex max-h-132.5 w-full flex-col gap-6 md:max-h-132.5 md:max-w-160.5'>
      <div className='flex w-full flex-col gap-3.75'>
        {ToolItems.map((item, i) => (
          <div key={item.name} className='flex w-full flex-col gap-3.75'>
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
                <div className='text-md-regular'>{item.name}</div>
              </div>
              <span className='text-md-bold'>{item.percentage} %</span>
            </div>
            {i !== ToolItems.length - 1 && (
              <div className='w-full border border-neutral-900' />
            )}
          </div>
        ))}
      </div>
      <ScrollBar orientation='vertical' className='absolute -left-6' />
    </ScrollArea>
  );
};

export default UsedTools;
