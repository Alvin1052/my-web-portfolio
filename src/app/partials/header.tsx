import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { NavItems } from '@/constants/NavItems';

const Header = () => {
  return (
    <div className='fixed top-0 z-1000 mt-4 w-full md:mt-8'>
      <div className='m-auto flex h-12 w-90 items-center justify-between rounded-full bg-black/40 px-4 backdrop-blur-lg md:w-fit md:justify-center md:gap-6 md:bg-black/20 md:px-6'>
        <div>
          <Link href='/' className='text-xl-bold cursor-pointer'>
            Alvin
          </Link>
        </div>
        {/*Menu Desktop Version */}
        <div className='hidden items-center justify-center gap-6 md:flex'>
          {NavItems.map((item) => (
            <div
              key={item.label}
              className='text-md-regular hover:text-primary-200/80 cursor-pointer p-2 transition-all duration-300 ease-in-out'
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>

        {/* Menu Mobile Version */}
        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <MenuIcon />
          </SheetTrigger>

          <SheetContent className='mx-auto my-4 h-screen w-90 rounded-2xl bg-transparent backdrop-blur-xl'>
            <div className='p-4'>
              <SheetTitle hidden />
              <div className='gap- flex flex-col justify-between gap-4'>
                {/*Menu Desktop Version */}

                {/* logo & close button */}
                <div className='flex items-center justify-between'>
                  <div className='text-xl-bold cursor-pointer'>Alvin</div>
                  <SheetClose className='hover:text-primary-400 cursor-pointer'>
                    <XIcon />
                  </SheetClose>
                </div>
                {/* Menu  */}
                <div className='flex flex-col gap-0'>
                  {NavItems.map((item) => (
                    <div
                      key={item.label}
                      className='text-md-regular cursor-pointer py-2 transition-all duration-300 ease-in-out hover:text-neutral-400'
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
