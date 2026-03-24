import CSS from '../../public/icons/css.svg';
import HTML from '../../public/icons/html.svg';
import Javascipt from '../../public/icons/javascript.svg';
import Typescript from '../../public/icons/typescript.svg';
import React from '../../public/icons/React.svg';
import NextJS from '../../public/icons/next-js.png';
import Tailwind from '../../public/icons/tailwind.svg';
import Tanstack from '../../public/icons/tanstack.png';
import RadixUI from '../../public/icons/radix-ui.svg';
import SHADCN from '../../public/icons/shadcn.png';
import { StaticImageData } from 'next/image';

interface ToolProps {
  name: string;
  icon: string | StaticImageData;
  percentage: number;
}

export const ToolItems: ToolProps[] = [
  {
    name: 'HTML',
    icon: HTML,
    percentage: 90,
  },
  {
    name: 'CSS',
    icon: CSS,
    percentage: 90,
  },
  {
    name: 'JavaScript',
    icon: Javascipt,
    percentage: 80,
  },
  {
    name: 'TypeScript',
    icon: Typescript,
    percentage: 80,
  },
  {
    name: 'React',
    icon: React,
    percentage: 80,
  },
  {
    name: 'Next Js',
    icon: NextJS,
    percentage: 80,
  },
  {
    name: 'Tailwind CSS',
    icon: Tailwind,
    percentage: 80,
  },
  {
    name: 'Tanstack Query',
    icon: Tanstack,
    percentage: 80,
  },
  {
    name: 'Radix UI',
    icon: RadixUI,
    percentage: 80,
  },
  {
    name: 'Shadcn UI',
    icon: SHADCN,
    percentage: 80,
  },
];
