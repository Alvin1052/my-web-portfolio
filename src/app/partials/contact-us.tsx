import Image from 'next/image';
import React from 'react';

import SocialMedia from '@/components/Services/SocialMedia';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className='custom-container from-primary-400 bg-gradient-to-t from-0% to-black/50 to-100% pt-20 pb-30'>
      <div className='flex w-full gap-10'>
        {/* Left */}
        <div className='flex w-full flex-col gap-7.5 border border-neutral-900 bg-black px-6 py-10'>
          {/* Title */}
          <div className='flex w-full flex-col gap-4'>
            <div className='md:display-2xl-bold display-md-bold'>
              Let’s<span className='text-primary-300'> Build Something </span>
              Great
            </div>
            <div className='text-md-regular text-neutral-400'>
              Got an idea, a project, or just want to connect? I’m always open
              to new conversations.
            </div>
          </div>
          {/* Form */}
          <div className='flex w-full flex-col gap-5'>
            {/* Name */}
            <div className='flex flex-col gap-1.5'>
              <div className='text-sm-regular text-neutral-25'>Name</div>
              <input
                type='text'
                placeholder='Enter your name'
                className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600'
              />
            </div>
            {/* Email */}
            <div className='flex flex-col gap-1.5'>
              <div className='text-sm-regular text-neutral-25'>Email</div>
              <input
                type='text'
                placeholder='Enter your email'
                className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600'
              />
            </div>
            {/* Message */}
            <div className='flex flex-col gap-1.5'>
              <div className='text-sm-regular text-neutral-25'>Message</div>
              <textarea
                placeholder='Enter your message'
                className='text-md-medium h-33.5 border border-neutral-900 px-4 py-2.25 text-neutral-600'
              />
            </div>
            <Button className='text-sm-semibold h-14 bg-white text-black'>
              <Image
                src={'/icons/mail.svg'}
                alt='mail'
                width={16}
                height={16}
                className='bg-black text-black'
                style={{ fill: 'black' }}
                color='black'
              />
              Send Message
            </Button>
          </div>
        </div>
        {/* Right */}
        <div className='flex w-full flex-col gap-5'>
          {/* Address */}
          <div className='flex flex-col gap-3'>
            <div className='text-xl-semibold'>Address</div>
            <div className='text-md-regular text-neutral-400'>
              Jakarta, Indonesia
            </div>
          </div>
          <div className='w-full border border-neutral-900' />
          {/* Contact */}
          <div className='flex flex-col gap-3'>
            <div className='text-xl-semibold'>Contact</div>
            <div className='text-md-regular text-neutral-400'>
              (+62) 1234567890
            </div>
          </div>
          <div className='w-full border border-neutral-900' />

          <div className='flex flex-col gap-5'>
            <div>Social Media</div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
