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
    icon: '/icons/css.svg',
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
    icon: '/icons/MongoDB.svg',
    percentage: 80,
  },
  {
    name: 'React',
    icon: '/icons/React.svg',
    percentage: 80,
  },
];
