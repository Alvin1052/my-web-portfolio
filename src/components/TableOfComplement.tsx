import Image from 'next/image';
import React from 'react';

import { ComparationItems } from '@/constants/Comparation';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const TableCompare = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className='flex max-w-300 items-center justify-center border border-neutral-900 bg-black p-3 md:p-6'>
        <Table>
          <TableHeader className=''>
            <TableRow className='h-18'>
              <TableHead className=''>Skills</TableHead>
              <TableHead className='bg-primary-400 w-16.5 border-b border-white'>
                <p className='text-center text-wrap md:text-left'>With Me</p>
              </TableHead>
              <TableHead className=''>
                <p className='text-center text-wrap md:text-left'>Others</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ComparationItems.map((skill) => (
              <TableRow key={skill.skill}>
                <TableCell className='md:text-lg-regular text-sm-regular text-wrap'>
                  {skill.skill}
                </TableCell>
                <TableCell className='bg-primary-400 border-b border-white'>
                  {skill.me ? trueIcon() : falseIcon()}
                </TableCell>
                <TableCell className=''>
                  {skill.others ? trueIcon() : falseIcon()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
const trueIcon = () => {
  return (
    <div className='flex-center size-5.75 rounded-full bg-white md:size-7.25'>
      <Image src={'/icons/true-icon.svg'} alt='tick' width={18} height={18} />
    </div>
  );
};
const falseIcon = () => {
  return (
    <div className='flex-center size-5.75 rounded-full bg-neutral-700 md:size-7.25'>
      <Image src={'/icons/false-icon.svg'} alt='cross' width={18} height={18} />
    </div>
  );
};

export default TableCompare;
