import Image from 'next/image';
import Link from 'next/link';

import Section from '@/components/Layout/Section';
import { AspectRatio } from '@/components/ui/aspect-ratio';

import { PortfolioList } from '@/constants/Portfolio';

const Portfolio = () => {
  return (
    <div>
      <Section
        title='Bridging Design and Development'
        subtitle='These are real projects where I implemented frontend interfaces with precision and attention to detail.'
        id='projects'
        container={true}
        position='center'
        className='relative'
      >
        <div className='flex flex-wrap items-center justify-center gap-5'>
          {PortfolioList.map((item) => (
            <div
              key={item.title}
              className='group w-full rounded-2xl p-1 transition-all duration-300 ease-in-out hover:scale-105 md:w-94.25'
            >
              <Link href={item.link} className='flex flex-col gap-4'>
                <AspectRatio className='object-contain transition-all duration-300 group-hover:rotate-2'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='rounded-xl'
                  />
                </AspectRatio>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl-semibold text-white'>
                    {item.title}
                  </div>
                  <div className='text-md-regular text-neutral-400'>
                    {item.year}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
