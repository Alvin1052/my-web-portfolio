import CSS from '../../public/icons/css.svg';
import MongoDb from '../../public/icons/mongodb.svg';
import Sequelize from '../../public/icons/sequalize.svg';

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
    icon: CSS,
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
    icon: Sequelize,
    percentage: 80,
  },
  {
    name: 'MongoDB',
    icon: MongoDb,
    percentage: 80,
  },
  {
    name: 'React',
    icon: '/icons/React.svg',
    percentage: 80,
  },
];
