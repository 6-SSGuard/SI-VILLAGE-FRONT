import { signUpAction } from '@/actions/member/signUpAction';
import SignUpForm from '@/components/forms/signup/SignUpForm';
import { Metadata } from 'next';
import React from 'react';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '간편 회원가입',
};

export default function Page() {
  const handleSignUp = async (signUpFormData: FormData) => {
    'use server';
    const res = await signUpAction(signUpFormData);
    // console.log(res);
    if (res) {
      // 회원가입 성공 시 메인 페이지로 서버 사이드에서 리디렉션
      redirect('/');
    } else {
      // 실패 시 에러 처리 (필요시 추가 가능)
      console.log('회원가입 실패');
    }
  };
  return (
    <main>
      <SignUpForm handleSignUp={handleSignUp} />
    </main>
  );
}
