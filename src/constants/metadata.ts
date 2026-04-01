import { Metadata } from 'next';
import { ProfileItem } from './ProfileItem';
import { PortfolioList } from './Portfolio';
import { JourneyList } from './Journey';
import { ToolItems } from './tools';

export const BaseUrl = 'https://my-web-portfolio-swart-seven.vercel.app/';

const tools: string[] = ToolItems.map((item) => item.name);

export const metadataKeyword = [
  ...tools,
  'alvin wiliawan',
  'front end developer',
  'web developer',
  'Nextjs Developer',
  'Jakarta',
  'Indonesia',
];

export const Profile_metadata: Metadata = {
  title: 'Profile | Alvin Wiliawan',
  description:
    'I turn ideas and designs into functional, accessible, and performant websites using modern frontend technologies.',
  keywords: ProfileItem.map((item) => item.title),
};

export const portfolio_metadata: Metadata = {
  title: 'Portfolio | Alvin Wiliawan',
  description:
    'These are real projects where I implemented frontend interfaces with precision and attention to detail.',
  keywords: PortfolioList.map((item) => item.title),
};

export const Journey_metadata: Metadata = {
  title: 'Journey | Alvin Wiliawan',
  description:
    'I turn ideas and designs into functional, accessible, and performant websites using modern frontend technologies.',
  keywords: JourneyList.map((item) => item.description),
};
