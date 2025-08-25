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
} from '../ui/table';

const TableTest = () => {
  return (
    <div>
      <div className='flex w-300 items-center justify-center border border-neutral-900 p-6'>
        <Table>
          <TableHeader className=''>
            <TableRow className='h-18'>
              <TableHead className='w-96'>Skills</TableHead>
              <TableHead className='bg-primary-400 w-96 border-b border-white'>
                With Me
              </TableHead>
              <TableHead className='w-96'>Others</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ComparationItems.map((skill) => (
              <TableRow key={skill.skill}>
                <TableCell className='text-lg-regular'>{skill.skill}</TableCell>
                <TableCell className='text-lg-regular bg-primary-400 border-b border-white'>
                  {skill.me ? trueIcon() : falseIcon()}
                </TableCell>
                <TableCell className='text-lg-regular'>
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
    <div className='flex-center size-7.25 rounded-full bg-white'>
      <Image src={'/icons/true-icon.svg'} alt='tick' width={18} height={18} />
    </div>
  );
};
const falseIcon = () => {
  return (
    <div className='flex-center size-7.25 rounded-full bg-neutral-700'>
      <Image src={'/icons/false-icon.svg'} alt='cross' width={18} height={18} />
    </div>
  );
};

export default TableTest;
