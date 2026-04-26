import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import api from 'axios';
import { useForm } from 'react-hook-form';
import { formScheme, TFormScheme } from '../lib/validation/form';
import { useRef, useState } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';
const service_id = 'service_vydb4qs';
const template_id = 'template_pzzqpmi';
const public_key = 'CVOZu9gAgT3Dw3kHu';
const ReCAPTCHASiteKey = '6Le5eMssAAAAAM5oZMwtMwJoO8vy-VWkzdRGtptM';
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
    if (isCaptchaVerified) {
      alert('CAPTCHA verified, form submitted!');
      mutate(data);
    } else {
      alert('Please verify the CAPTCHA before submitting.');
    }
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
    ReCAPTCHASiteKey,
  };
};

const Api = api.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email/send',
  headers: {
    'Content-Type': 'application/json',
  },
});

const sentEmail = async (data: TFormScheme) => {
  emailjs.init({ publicKey: public_key });

  const payload = {
    ...data,
    time: new Date().toLocaleString('en-US', { hour12: false }),
  };

  var xx = {
    service_id: service_id,
    template_id: template_id,
    user_id: public_key,
    template_params: payload,
  };
  const response = await Api.post('/', JSON.stringify(xx));
  return response.data;
};
