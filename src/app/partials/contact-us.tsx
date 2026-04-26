'use client';
import SocialMedia from '@/components/SocialMedia';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

import { Personal } from '@/constants/personal-data';
import { DownloadIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import { useForms } from '../hooks/useForm';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    isSuccess,
    isError,
    handleOpen,
    isOpen,
    isPending,
    recaptchaRef,
    handleCaptchaChange,
  } = useForms();

  return (
    <section id='contact' className='relative pb-10'>
      <div className='custom-container relative z-50 md:pt-20 md:pb-30'>
        <div className='flex w-full flex-wrap gap-10 md:flex-nowrap'>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex w-full flex-col gap-5'
            >
              {/* Name */}
              <div className='flex flex-col gap-1.5'>
                <label
                  id='labelName'
                  htmlFor='name'
                  className='text-sm-regular text-neutral-25'
                >
                  Name
                </label>
                <input
                  {...register('name')}
                  type='text'
                  placeholder='Enter your name'
                  className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600 focus:text-neutral-300 focus:outline-none'
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
                  id='labelEmail'
                  htmlFor='email'
                  className='text-sm-regular text-neutral-25'
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type='text'
                  placeholder='Enter your email'
                  className='text-md-medium h-12 border border-neutral-900 px-4 py-2.25 text-neutral-600 focus:text-neutral-300 focus:outline-none'
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
                  id='labelMessage'
                  htmlFor='message'
                  className='text-sm-regular text-neutral-25'
                >
                  Message
                </label>
                <textarea
                  {...register('message')}
                  placeholder='Enter your message'
                  className='text-md-medium h-33.5 border border-neutral-900 px-4 py-2.25 text-neutral-600 focus:text-neutral-300 focus:outline-none'
                />
                {errors.message && (
                  <p className='mt-1 text-xs text-red-500'>
                    {errors.message.message}
                  </p>
                )}
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey='6Le5eMssAAAAAM5oZMwtMwJoO8vy-VWkzdRGtptM'
                onChange={handleCaptchaChange}
              />

              <Button
                type='submit'
                className='group text-sm-semibold h-14 bg-white text-black hover:text-neutral-100'
              >
                <Mail width={24} height={24} />

                {isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Right */}
          <div className='flex w-full flex-col flex-wrap gap-2 md:gap-5'>
            {/* Address */}
            <div className='flex flex-col gap-1 md:gap-3'>
              <div className='text-xl-semibold'>Address</div>
              <div className='text-md-regular cursor-pointer text-neutral-400 hover:text-neutral-300'>
                {Personal.Address}
              </div>
              <div className='hidden w-full border border-neutral-900 md:block' />
            </div>
            {/* Contact */}
            <div className='flex flex-col gap-1 md:gap-3'>
              <div className='text-xl-semibold'>Contact</div>
              <Link
                href={`https://wa.me/${Personal.countryCode}${Personal.phoneNumber}`}
                className='text-md-regular text-neutral-400 hover:text-neutral-300'
                target='_blank'
              >
                (+{Personal.countryCode}) {Personal.phoneNumber}
              </Link>
              <div className='hidden w-full border border-neutral-900 md:block' />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1 md:gap-3'>
              <div className='text-xl-semibold'>Email</div>
              <Link
                href={`mailto:${Personal.mail}`}
                className='text-md-regular text-neutral-400 hover:text-neutral-300'
                target='_blank'
              >
                {Personal.mail}
              </Link>
              <div className='hidden w-full border border-neutral-900 md:block' />
            </div>
            {/* Social Media */}
            <div className='flex flex-col gap-1'>
              <div>Social Media</div>
              <SocialMedia />
            </div>
            {/* Button Download CV */}
            <Button className='h-10 w-fit rounded-lg'>
              <a
                href='/downloads/resume.pdf'
                download={"Alvin's Resume.pdf"}
                className='flex h-full items-center justify-start gap-2'
              >
                <DownloadIcon className='size-6' />
                <div className='hidden h-full border border-neutral-200 md:block' />
                <div>Check My Resume</div>
              </a>
            </Button>
          </div>
        </div>

        <div>
          <DialogBox
            isOpen={isOpen}
            isSuccess={isSuccess}
            isFailed={isError}
            handleClose={() => handleOpen()}
          />
        </div>
      </div>
      <div className='absolute bottom-0 z-30 h-[757px] w-full bg-gradient-to-b from-black from-0% to-transparent to-100%' />
      <div className='bg-contact-pattern absolute bottom-0 z-20 h-[757px] w-full' />
    </section>
  );
};

export default ContactUs;

interface dialogboxprops {
  isOpen: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  handleClose: () => void;
}
const DialogBox: React.FC<dialogboxprops> = ({
  isSuccess,
  isFailed,
  handleClose,
  isOpen,
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogHeader hidden />
      <AlertDialogTitle />
      <AlertDialogContent
        className={`w-90.25 rounded-4xl border-2 border-neutral-900 bg-neutral-900 md:w-129.5`}
      >
        <div className='flex flex-col rounded-2xl'>
          {/* Upper */}
          <div className='relative flex w-full items-center justify-center overflow-hidden rounded-t-2xl py-10'>
            <Image
              className='relative z-100'
              src={`${isSuccess ? '/icons/dialog-success.png' : isFailed ? '/icons/dialog-failed.png' : '/icons/mail.svg'}`}
              alt={'dialog'}
              width={180}
              height={180}
            />

            {/* Pattern */}
            <div className='bg-dialog-pattern absolute top-0 left-0 z-10 h-full w-full opacity-90' />
            <div className='absolute top-0 z-20 h-full w-full bg-gradient-to-t from-black from-8% to-transparent to-100%' />

            <div
              className={`absolute -top-50 z-5 h-100 w-full bg-radial ${isSuccess ? 'from-primary-300' : isFailed ? 'from-[rgb(238,29,82,0.8)]' : 'from-black'} from-0% to-transparent to-100%`}
            />
          </div>
          {/* Lower */}
          <div className='flex w-full flex-col items-center gap-6 rounded-b-2xl bg-black p-4 md:gap-8 md:p-8'>
            <div className='flex flex-col items-center gap-0.75 md:gap-2'>
              <div className='text-xl-bold md:display-xs-bold text-neutral-25'>
                {isSuccess
                  ? 'Thanks for Reaching Out!'
                  : isFailed
                    ? 'Message Not Sent'
                    : 'Please Wait...'}
              </div>
              <p className='text-sm-medium md:text-md-regular place-content-center place-items-center text-center align-middle text-neutral-400'>
                {isSuccess
                  ? 'I’ve received your message and will get back to you shortly.'
                  : isFailed
                    ? `This Send Email Just For Testing Purpose.
                    Please sent direct to ${Personal.mail}`
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
