import SignUpForm from '@/components/forms/signup/SignUpForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '간편 회원가입',
};

export default function Page() {
  return (
    <main>
      <SignUpForm />
    </main>
  );
}
