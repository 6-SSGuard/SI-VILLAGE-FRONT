import { signInAction } from '@/actions/member/signInAction';
import LogInForm from '@/components/forms/login/LogInForm';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import React from 'react';

export const metadata: Metadata = {
  title: '로그인',
};

export default function page() {
  const handleSignIn = async (signInFormData: FormData) => {
    'use server';
    const res = await signInAction(signInFormData);
    console.log(res);
    if (res) {
      const cookieStore = cookies();
      const returnUrl = cookieStore.get('returnUrl')?.value || '/';

      // 사용한 쿠키 삭제
      cookieStore.delete('returnUrl');

      redirect(returnUrl);
    } else {
      console.log('로그인 실패');
    }
  };

  return (
    <main className="h-min-screen">
      <LogInForm handleSignIn={handleSignIn} />
    </main>
  );
}
