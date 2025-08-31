import Image from 'next/image';
import React from 'react';

import SocialMedia from '@/components/SocialMedia';
import {
  AlertDialogHeader,
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { useForms } from '../hooks/useForm';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    onSubmit,
    serverError,
    isSuccess,
    isFailed,
    setIsFailed,
    setIsSuccess,
  } = useForms();

  console.log('lol', serverError);

  const handleClose = () => {
    setIsFailed(false);
    setIsSuccess(false);
  };
  return (
    <div className='relative'>
      <div className='custom-container relative z-50 pt-20 pb-30'>
        <div className='flex w-full gap-10'>
          {/* Left */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-full flex-col gap-7.5 border border-neutral-900 bg-black px-6 py-10'
          >
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
                <label
                  htmlFor='name'
                  className='text-sm-regular text-neutral-25'
                >
                  Name
                </label>
                <input
                  {...register('name')}
                  type='text'
                  placeholder='Enter your name'
                  className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600'
                />
                {errors.name && (
                  <p className='mt-1 text-xs text-red-500'>
                    {errors.name.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='email'
                  className='text-sm-regular text-neutral-25'
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type='text'
                  placeholder='Enter your email'
                  className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600'
                />
                {errors.email && (
                  <p className='mt-1 text-xs text-red-500'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Message */}
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='message'
                  className='text-sm-regular text-neutral-25'
                >
                  Message
                </label>
                <textarea
                  {...register('message')}
                  placeholder='Enter your message'
                  className='text-md-medium h-33.5 border border-neutral-900 px-4 py-2.25 text-neutral-600'
                />
                {errors.message && (
                  <p className='mt-1 text-xs text-red-500'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                className='text-sm-semibold h-14 bg-white text-black'
              >
                <Image
                  src={'/icons/mail.svg'}
                  alt='mail'
                  width={16}
                  height={16}
                  className='bg-black text-black'
                  style={{ fill: 'black' }}
                  color='black'
                />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>

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
        <div>
          <DialogBox
            isSuccess={isSuccess}
            isFailed={isFailed}
            handleClose={handleClose}
          />
        </div>
      </div>
      <div className='absolute bottom-0 z-30 h-[757px] w-full bg-gradient-to-b from-black from-0% to-transparent to-100%' />
      <div className='bg-contact-pattern absolute bottom-0 z-20 h-[757px] w-full' />
    </div>
  );
};

export default ContactUs;

interface dialogboxprops {
  isSuccess: boolean;
  isFailed: boolean;
  handleClose: () => void;
}
const DialogBox: React.FC<dialogboxprops> = ({
  isSuccess,
  isFailed,
  handleClose,
}) => {
  return (
    <AlertDialog open={isSuccess || isFailed}>
      <AlertDialogHeader hidden />
      <AlertDialogTitle />
      <AlertDialogContent
        className={`w-90.25 border-2 border-neutral-900 bg-neutral-900 md:w-129.5`}
      >
        <div className='flex flex-col'>
          {/* Upper */}
          <div className='relative flex w-full items-center justify-center overflow-hidden py-10'>
            <Image
              className='relative z-100'
              src={`${isSuccess ? '/icons/dialog-success.png' : isFailed ? '/icons/dialog-failed.png' : '/icons/mail.svg'}`}
              alt={'dialog'}
              width={180}
              height={180}
            />
            {/* <Image
                  className='absolute top-1/2 left-1/2 z-15 w-45 -translate-x-1/2 -translate-y-1/2'
                  src={'/pattern/circle-pattern.png'}
                  alt={'pattern'}
                  width={147.62}
                  height={147.62}
                /> */}
            {/* Pattern */}
            <div className='bg-dialog-pattern absolute top-0 left-0 z-10 h-full w-full opacity-90' />
            <div className='absolute top-0 z-20 h-full w-full bg-gradient-to-t from-black from-8% to-transparent to-100%' />

            <div
              className={`absolute -top-50 z-5 h-100 w-full bg-radial ${isSuccess ? 'from-primary-300' : isFailed ? 'from-[rgb(238,29,82,0.8)]' : 'from-black'} from-0% to-transparent to-100%`}
            />
          </div>
          {/* Lower */}
          <div className='flex w-full flex-col items-center gap-6 bg-black p-4 md:gap-8 md:p-8'>
            <div className='flex flex-col items-center gap-0.75 md:gap-2'>
              <h3 className='text-xl-bold md:display-xs-bold text-neutral-25'>
                {isSuccess
                  ? 'Thanks for Reaching Out!'
                  : isFailed
                    ? 'Message Not Sent'
                    : 'Please Wait...'}
              </h3>
              <p className='text-sm-medium md:text-md-regular text-neutral-400'>
                {isSuccess
                  ? 'I’ve received your message and will get back to you shortly.'
                  : isFailed
                    ? 'Something broke along the way. Let’s try resending it.'
                    : 'Please Wait...'}
              </p>
            </div>
            <AlertDialogAction
              className='text-sm-bold h11 w-full rounded-full py-2.5 md:h-12'
              onClick={handleClose}
            >
              {isSuccess
                ? 'Back To Home'
                : isFailed
                  ? 'Try Again'
                  : 'Please Wait...'}
            </AlertDialogAction>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
