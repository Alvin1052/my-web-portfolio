import { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '404 - Sorry (! _ !)',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col items-center justify-center gap-4'>
        <Image
          src={'/images/404.png'}
          alt='404'
          width={400}
          height={400}
          className='size-100 md:size-150 lg:size-200'
        />

        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-primary-200 text-3xl font-bold md:text-4xl lg:text-6xl'>
            <span>404</span> - Page Not Found
          </h1>
          <p className='text-lg font-semibold md:text-xl lg:text-2xl'>
            This page does not exist.
          </p>
        </div>
      </body>
    </html>
  );
}
