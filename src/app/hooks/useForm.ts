import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import api from 'axios';
import { useForm } from 'react-hook-form';
import { formScheme, TFormScheme } from '../lib/validation/form';
import { useRef, useState } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';

const EMAIL_SERVICE_ID = 'service_vydb4qs';
const EMAIL_TEMPLATE_ID = 'template_pzzqpmi';
const EMAIL_PUBLIC_KEY = 'CVOZu9gAgT3Dw3kHu';
export const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TFormScheme>({ resolver: zodResolver(formScheme) });
  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: (data: TFormScheme) => {
      return sentEmail({ ...data });
    },
    onSuccess: () => {
      reset();
      setIsOpen(true);
      resetCaptcha();
    },
    onError: () => {
      setIsOpen(true);
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (token: string | null) => {
    setIsCaptchaVerified(!!token);
  };
  const resetCaptcha = () => recaptchaRef.current?.reset();
  const onSubmit = async (data: TFormScheme) => {
    event?.preventDefault();
    // if (isCaptchaVerified) {
    //   mutate(data);
    // } else {
    //   alert('Please verify the CAPTCHA before submitting.');
    // }
    mutate(data);
  };

  const handleOpen = () => setIsOpen(!isOpen);

  return {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    onSubmit,
    isSuccess,
    isError,
    handleOpen,
    isOpen,
    isPending,
    handleCaptchaChange,
    recaptchaRef,
  };
};

const Api = api.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email/send',
  headers: {
    'Content-Type': 'application/json',
  },
});

const sentEmail = async (data: TFormScheme) => {
  emailjs.init({ publicKey: EMAIL_PUBLIC_KEY });

  const payload = {
    ...data,
    time: new Date().toLocaleString('en-US', { hour12: false }),
  };

  var xx = {
    service_id: EMAIL_SERVICE_ID,
    template_id: EMAIL_TEMPLATE_ID,
    user_id: EMAIL_PUBLIC_KEY,
    template_params: payload,
  };
  const response = await Api.post('/', JSON.stringify(xx));
  return response.data;
};
