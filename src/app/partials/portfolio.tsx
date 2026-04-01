import Image from 'next/image';
import Link from 'next/link';

import Section from '@/components/Layout/Section';

import { PortfolioList } from '@/constants/Portfolio';

export default function Portfolio() {
  return (
    <Section
      title='Bridging Design and Development'
      subtitle='These are real projects where I implemented frontend interfaces with precision and attention to detail.'
      id='projects'
      container={true}
      position='center'
      className='relative'
    >
      <ul className='flex flex-col items-start justify-between gap-4 lg:flex-row'>
        {PortfolioList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className='group w-full rounded-2xl transition-all duration-300 ease-in-out hover:scale-105'
            >
              <div className='flex w-[361px] flex-col gap-4 md:w-full'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                  className='size-[361px] rounded-xl object-cover object-top lg:size-[266px]'
                />

                <div className='flex flex-col gap-1'>
                  <div className='text-xl-semibold line-clamp-1 text-ellipsis text-white'>
                    {item.title}
                  </div>
                  <div className='text-md-regular text-neutral-400'>
                    {item.year}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
