import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { success } from 'zod';

import api from '@/Services/api';

import { loginScheme, TLoginScheme } from '../lib/validation/auth';

const useLogin = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginScheme>({ resolver: zodResolver(loginScheme) });

  const onSubmit = async (data: TLoginScheme) => {
    console.log('input', data);
    setServerError(null);
    setIsFailed(false);
    setIsSuccess(false);
    try {
      const response = await api.post('/auth/login', data);
      console.log(response.data.message);

      reset();
      setIsSuccess(true);
    } catch (error: any) {
      const message = error.response?.data?.message || 'something went wrong';
      setServerError(message);
      setIsFailed(true);
    }
  };
  return {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    onSubmit,
    serverError,
    isSuccess,
    isFailed,
    setIsFailed,
    setIsSuccess,
  };
};

export default useLogin;
