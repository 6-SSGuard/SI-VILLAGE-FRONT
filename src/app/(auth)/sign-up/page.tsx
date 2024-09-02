import React from 'react';
import SignUpInfo from '@/components/pages/signup/SignUpInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

export default function page() {
  return (
    <main>
      <SignUpInfo />
    </main>
  );
}
