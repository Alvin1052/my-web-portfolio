import { StaticImageData } from 'next/image';

interface ProfileItemsProps {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
}

export const ProfileItem: ProfileItemsProps[] = [
  {
    src: '/icons/profile-codeicon.svg',
    alt: 'code',
    title: 'Frontend Development',
    description:
      'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
  },
  {
    src: '/icons/profile-webicon.svg',
    alt: 'globe',
    title: 'Web Performance',
    description:
      'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
  },
  {
    src: '/icons/profile-componenticon.svg',
    alt: 'component',
    title: 'Component Based UI',
    description:
      'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
  },
  {
    src: '/icons/profile-smartphoneicon.svg',
    alt: 'smartphone',
    title: 'Responsive Design',
    description:
      'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
  },
];
