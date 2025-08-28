import { Charm } from 'next/font/google';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const charm = Charm({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
});
const Hero = () => {
  return (
    <section id='/' className='relative'>
      {/* Content */}
      <div className='relative z-50 mb-15 flex flex-col-reverse items-center justify-center gap-6 md:mb-21 md:flex-row'>
        {/* Text */}
        <div className='md:flex-[7] md:basis-[80px] md:translate-x-[140px] md:translate-y-[73px]'>
          <div
            className='flex flex-col gap-8 md:gap-15.5'
            style={{ width: 'clamp(22.56rem, 47.50vw, 42.75rem)' }}
          >
            <div className='flex flex-col gap-4 md:gap-8'>
              <div className='text-md-regular md:text-xl-regular'>
                Hi. I’m Alvin Wiliawan
              </div>
              <div>
                <div>
                  <span className='md:display-title-bold display-title-mobile-bold'>
                    FRONT<span className={charm.className}>END </span>
                    DEVELOPER
                  </span>
                </div>
              </div>
              <div className='text-lg-regular text-neutral-400'>
                Passionate about frontend development, I focus on crafting
                digital products that are visually polished,
                performance-optimized, and deliver a consistent experience
                across all platforms.
              </div>
            </div>
            <Button className='h-14 w-full md:w-71.75'>
              <Image
                src={'/icons/mail.svg'}
                alt='mail'
                width={16}
                height={16}
              />
              Hire Me
            </Button>
          </div>
        </div>

        {/* Picture */}
        <div
          className='md:flex-[3] md:-translate-x-[73px]'
          style={{ width: 'clamp(15.75rem, 23.68vw, 21.31rem)' }}
        >
          <Image
            src={'/images/personal.png'}
            alt='hero'
            width={341}
            height={671}
          />
        </div>
      </div>

      <div className='to-primary-300/50 absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-tl from-black from-50% to-100%' />
      <div className='bg-hero-pattern absolute top-0 left-0 z-1 h-full w-full' />
    </section>
  );
};

export default Hero;
