'use client';

import Image from 'next/image';
import { set } from 'zod';

import useLogin from '@/app/hooks/useLogin';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    onSubmit,
    serverError,
    isSuccess,
    setIsFailed,
    setIsSuccess,
    isFailed,
  } = useLogin();

  const handleClose = () => {
    setIsFailed(false);
    setIsSuccess(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-10 flex max-w-150 flex-col gap-4 rounded-lg border bg-red-300 p-6 shadow-md'
      >
        {serverError && (
          <p className='rounded bg-red-100 p-2 text-center text-xl! text-red-500'>
            {serverError}
          </p>
        )}
        {/* Email */}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm'
          />
          {errors.email && (
            <p className='mt-1 text-xs text-red-500'>{errors.email.message}</p>
          )}
        </div>
        {/* Password */}
        <div>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password')}
            type='password'
            id='password'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm'
          />
          {errors.password && (
            <p className='mt-1 text-xs text-red-500'>
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Button */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:bg-gray-400'
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

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
      </form>
    </div>
  );
};

export default LoginForm;
