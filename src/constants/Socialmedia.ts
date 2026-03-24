import { StaticImageData } from 'next/image';
import Threads from '../../public/icons/Threads.png';
import Instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';
import github from '../../public/icons/github.svg';
interface SocialMedia {
  name: string;
  link: string;
  icon: string | StaticImageData;
}

export const socialMedia: SocialMedia[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/alvinwiliawan/',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alvinwiliawan/',
    icon: linkedin,
  },
  {
    name: 'Threads',
    link: 'https://www.threads.com/@alvinwiliawan',
    icon: Threads,
  },
  {
    name: 'Github',
    link: 'https://github.com/Alvin1052',
    icon: github,
  },
];
