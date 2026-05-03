import { MenuIcon, XIcon } from 'lucide-react';
import logoIcon from '../../../public/icons/logo-transparent.png';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { NavItems } from '@/constants/NavItems';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='fixed top-0 z-1000 mt-4 w-full md:mt-8'>
      <div className='m-auto flex h-12 w-[90%] items-center justify-between rounded-full bg-black/40 px-4 backdrop-blur-lg md:w-fit md:justify-center md:gap-6 md:bg-black/20 md:px-6'>
        <Link href='/' className='text-xl-bold cursor-pointer'>
          <Image src={logoIcon} alt='logo' width={50} height={50} />
        </Link>

        {/*Menu Desktop Version */}
        <nav>
          <ul className='hidden items-center justify-center gap-6 md:flex'>
            {NavItems.map((item) => (
              <li
                key={item.label}
                className='text-md-regular hover:text-primary-200/80 cursor-pointer p-2 transition-all duration-300 ease-in-out'
              >
                <Link
                  href={item.href}
                  className='scroll-smooth transition-all duration-300 ease-in-out'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
                <nav>
                  <ul className='flex flex-col gap-2'>
                    {NavItems.map((item) => (
                      <li key={item.label}>
                        <SheetClose
                          asChild
                          className='text-md-regular cursor-pointer py-2 font-bold transition-all duration-300 ease-in-out hover:text-neutral-400'
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
