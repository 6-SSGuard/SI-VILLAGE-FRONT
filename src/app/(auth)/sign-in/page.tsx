import LogInForm from '@/components/forms/login/LogInForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '로그인',
};

export default function page() {
  return (
    <>
      <LogInForm />
    </>
  );
}
