'use client';

import { Button } from '@/components/ui/button';
import { useForms } from '@/hooks/useForm';
import { Mail } from 'lucide-react';

const PlaygoundPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    isSuccess,
    isError,
    reset,
  } = useForms();

  return (
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
          <p className='mt-1 text-xs text-red-500'>{errors.name.message}</p>
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
          <p className='mt-1 text-xs text-red-500'>{errors.email.message}</p>
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
          <p className='mt-1 text-xs text-red-500'>{errors.message.message}</p>
        )}
      </div>

      <Button
        type='submit'
        className='group text-sm-semibold h-14 bg-white text-black hover:text-neutral-100'
      >
        <Mail width={24} height={24} />

        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default PlaygoundPage;
