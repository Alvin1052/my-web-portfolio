import { StaticImageData } from 'next/image';

interface TrustedVoiceProps {
  title?: string;
  subtitle?: string;
  star: number;
  description: string;
  profileImage: string | StaticImageData;
  ProfileName: string;
  profileJob: string;
}

const TrustedVoiceList: TrustedVoiceProps[] = [
  {
    title: '8X',
    subtitle: 'More users converted after redesign',
    star: 5,
    description:
      'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
    profileImage: '/images/profile1.png',
    ProfileName: 'Pablo Stanley',
    profileJob: 'Product Manager at Finovate',
  },
  {
    title: '3X',
    subtitle: 'Improved user engagement and sign-ups',
    star: 5,
    description:
      'Edwin’s expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing. ',
    profileImage: '/images/profile2.png',
    ProfileName: 'Pablo Stanley',
    profileJob: 'Product Manager at Finovate',
  },
  {
    title: '',
    subtitle: '',
    star: 5,
    description:
      'Edwin’s work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.',
    profileImage: '/images/profile3.png',
    ProfileName: 'Pablo Stanley',
    profileJob: 'Product Manager at Finovate',
  },
  {
    title: '',
    subtitle: '',
    star: 5,
    description:
      'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    profileImage: '/images/profile4.png',
    ProfileName: 'Pablo Stanley',
    profileJob: 'Product Manager at Finovate',
  },
];

export default TrustedVoiceList;
