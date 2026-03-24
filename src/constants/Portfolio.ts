import { StaticImageData } from 'next/image';
import Library from '../../public/images/portofolio-library.png';
import Restaurant from '../../public/images/portofolio-restaurant-web.png';
import Movie from '../../public/images/portofolio-movie.png';

interface PortfolioType {
  title: string;
  image: string | StaticImageData;
  year: string | number;
  link: string;
}

export const PortfolioList: PortfolioType[] = [
  {
    title: 'Movie Apps',
    image: Movie,
    year: '2025',
    link: 'https://movie-theater-app.vercel.app/',
  },
  {
    title: 'Library Apps',
    image: Library,
    year: '2025',
    link: 'https://library-apps-updated.vercel.app/',
  },
  {
    title: 'Restaurant Apps (on Maintenance)',
    image: Restaurant,
    year: '2025',
    link: '/',
  },
];
