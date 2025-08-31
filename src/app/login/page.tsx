import React from 'react';

import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className='w-full'>
      <h1 className='mt-10 text-center text-3xl font-bold'>Login</h1>
      <LoginForm />
    </div>
  );
}
