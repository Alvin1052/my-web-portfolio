import img from '../../public/icons/css.svg';
import img2 from '../../public/icons/mongodb.svg';

interface ToolProps {
  name: string;
  icon: string;
  percentage: number;
}

export const ToolItems: ToolProps[] = [
  {
    name: 'HTML',
    icon: '/icons/html.svg',
    percentage: 90,
  },
  {
    name: 'CSS',
    icon: img,
    percentage: 90,
  },
  {
    name: 'JavaScript',
    icon: '/icons/javascript.svg',
    percentage: 80,
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    percentage: 80,
  },
  {
    name: 'Sequalize',
    icon: '/icons/Sequalize.svg',
    percentage: 80,
  },
  {
    name: 'MongoDB',
    icon: '/icons/React.svg',
    percentage: 80,
  },
  {
    name: 'React',
    icon: '/icons/React.svg',
    percentage: 80,
  },
];
