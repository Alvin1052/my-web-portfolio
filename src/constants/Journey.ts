import { StaticImageData } from 'next/image';

import Biznet from '../../public/images/Journey-Biznet.png';
import RevoU from '../../public/images/Journey-RevoU.png';
import Hannochs from '../../public/images/Journey-Hannochs.png';
import RJGF from '../../public/images/Journey-RJGF.png';
import WPH from '../../public/images/Journey-WPH.svg';
export interface Journey {
  title: string;
  year: string;
  description: string;
  companyImage: string | StaticImageData;
}

export const JourneyList: Journey[] = [
  {
    title: 'Business Coordinator at BIZNET',
    year: '2021 - 2022',
    description:
      "Analyzing Market Segmentation Business to be Prospect List and become a Customer and also Analyzing Potential Property to make Agreement with Property's Owner.",
    companyImage: Biznet,
  },
  {
    title: 'Data Analyst at RevoU',
    year: '2022 - 2023',
    description:
      'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance.',
    companyImage: RevoU,
  },
  {
    title: 'Digital Marketing Analyst at Hannochs',
    year: '2023 - 2024',
    description:
      'Analyzing Digital Advertising Campaign for Making Report and Dashboard Weekly and Evaluate the Content Ads. Taking Photo and Video for Editing use for Social Media.',
    companyImage: Hannochs,
  },
  {
    title: 'Pre-Sales Network Engineer at RJGF',
    year: '2024 - Present',
    description:
      'Giving Consultation about Customer Network and Surveilance System. Designing and Sizing Customer Needs for Expanding or Replacing Network and Surveilances devices.',
    companyImage: RJGF,
  },
  {
    title: 'Frontend Developer at WPH',
    year: '2025 - Present',
    description:
      'Learning to Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems.',
    companyImage: WPH,
  },
];
