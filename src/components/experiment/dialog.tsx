import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
} from '@radix-ui/react-alert-dialog';
import React from 'react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

const Announcement = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>open</AlertDialogTrigger>
      <AlertDialogHeader />
      <AlertDialogContent>
        <AlertDialogTitle>lol</AlertDialogTitle>
        <AlertDialogDescription>
          llllllllllllllllllllllllll
        </AlertDialogDescription>
        <AlertDialogAction className='bg-pink-500 text-white'>
          Action
        </AlertDialogAction>
        <AlertDialogCancel className='bg-pink-500 text-white'>
          Cancel
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Announcement;
