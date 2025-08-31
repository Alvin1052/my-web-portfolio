import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import api from '@/Services/api';

import { formScheme, TFormScheme } from '../lib/validation/form';

export const useForms = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TFormScheme>({ resolver: zodResolver(formScheme) });

  const onSubmit = async (data: TFormScheme) => {
    setServerError(null);

    try {
      const response = await api.post('/auth/form', data); // data setelah hit disini lgsg masuk ke validasi Server-Side dan mereturn hasil dari backend

      console.log(response);
      setIsSuccess(true);
      reset();
    } catch (error: any) {
      const message =
        error?.response?.data?.errorMessage || 'something went wrong aaa';
      setIsFailed(true);
      setServerError(message);
    }
  };
  return {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    onSubmit,
    isSuccess,
    isFailed,
    setIsFailed,
    setIsSuccess,
    serverError,
  };
};
