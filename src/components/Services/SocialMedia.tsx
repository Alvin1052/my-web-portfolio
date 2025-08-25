import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMedia } from '@/constants/Socialmedia';

const SocialMedia = () => {
  return (
    <div className='flex gap-4'>
      {socialMedia.map((item) => (
        <Link href={item.link} key={item.name}>
          <div className='flex size-10 items-center justify-center rounded-full border border-neutral-800 p-2.5 transition-all duration-300 ease-in-out hover:opacity-80'>
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className='size-5'
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
