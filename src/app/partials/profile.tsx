import Image from 'next/image';
import React from 'react';

import SocialMedia from '@/components/SocialMedia';

import { ProfileItem } from '@/constants/ProfileItem';

const Profile = () => {
  return (
    <section
      id='profile'
      className='custom-container flex flex-col gap-6 py-10 md:gap-12 md:py-20'
    >
      <div className='flex flex-col justify-between gap-6 md:flex-row'>
        {/* Left side */}
        <div className='md:display-xl-bold display-md-bold md:w-195'>
          I turn ideas and designs into functional, accessible, and performant
          websites {''}
          <span className='text-primary-300'>
            using modern frontend technologies.
          </span>
        </div>
        {/* Right side */}
        <div className='flex flex-col gap-6 md:justify-between'>
          <p className='text-md-regular md:text-lg-regular text-neutral-400'>
            About Me
          </p>
          {/* Social Media */}
          <SocialMedia />
        </div>
      </div>
      <div className='w-full border border-neutral-900' />
      {/* Main Content */}
      <div className='flex w-full flex-col items-center justify-between gap-10.25 md:flex-row'>
        {/* Image */}
        <div className='relative h-102.25 w-90.25 md:h-[513px] md:w-[453px]'>
          <Image src={'/images/Profile-Image.png'} alt='Profile' fill />
        </div>

        {/* Content */}
        <div className='flex max-w-[706px] md:items-center md:justify-center'>
          <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 md:gap-y-10'>
            {/* List Content */}
            {ProfileItem.map((item, i) => (
              <div
                key={item.alt}
                className='flex flex-col items-center justify-between md:gap-6'
              >
                <div className='flex flex-col justify-center gap-3 md:max-w-[329px] md:gap-6'>
                  <Image src={item.src} alt={item.alt} width={40} height={40} />
                  <div className='flex flex-col gap-0.5'>
                    <div className='md:text-xl-bold text-lg-bold text-white'>
                      {item.title}
                    </div>
                    <div className='text-sm-regular md:text-md-regular text-neutral-400 md:max-w-82.25'>
                      {item.description}
                    </div>
                  </div>
                </div>
                {i !== ProfileItem.length - 1 && (
                  <div className='w-full border border-neutral-900 md:hidden' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
