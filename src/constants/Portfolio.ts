import { StaticImageData } from 'next/image';

interface PortfolioType {
  title: string;
  image: string | StaticImageData;
  year: string | number;
  link: string;
}

export const PortfolioList: PortfolioType[] = [
  {
    title: 'Portofolio 1',
    image: '/images/Portfolio1.png',
    year: '2025',
    link: '/',
  },
  {
    title: 'Portofolio 2',
    image: '/images/Portfolio2.png',
    year: '2025',
    link: '/',
  },
  {
    title: 'Portofolio 3',
    image: '/images/Portfolio3.png',
    year: '2025',
    link: '/',
  },
];
