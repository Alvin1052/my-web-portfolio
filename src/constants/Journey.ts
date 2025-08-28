import { StaticImageData } from 'next/image';

interface Journey {
  title: string;
  year: string;
  description: string;
  companyImage: string | StaticImageData;
}

export const JourneyList: Journey[] = [
  {
    title: 'Frontend Developer',
    year: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    companyImage: '/icons/journey-airbnb.svg',
  },
  {
    title: 'Frontend Developer',
    year: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    companyImage: '/icons/journey-dribble.svg',
  },
  {
    title: 'Frontend Developer',
    year: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    companyImage: '/icons/journey-zoom.svg',
  },
  {
    title: 'Frontend Developer',
    year: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    companyImage: '/icons/journey-zoom.svg',
  },
  {
    title: 'Frontend Developer',
    year: '2025 - Present',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    companyImage: '/icons/journey-zoom.svg',
  },
];
