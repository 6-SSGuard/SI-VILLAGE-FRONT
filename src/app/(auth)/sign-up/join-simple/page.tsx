import { signUpAction } from '@/actions/member/signUpAction';
import SignUpForm from '@/components/forms/signup/SignUpForm';
import { Metadata } from 'next';
import React from 'react';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '간편 회원가입',
};

export default function Page() {
  async function handleSignUp(formData: FormData) {
    'use server';

    // 이메일 아이디와 도메인을 합치기
    const emailId = formData.get('emailId') as string;
    const emailDomain = formData.get('emailDomain') as string;
    const email = `${emailId}@${emailDomain}`;

    // 새로운 FormData 객체 생성
    const signUpFormData = new FormData();

    // 기존 FormData의 모든 필드를 새 FormData에 복사 (email 제외)
    for (const [key, value] of formData.entries()) {
      if (key !== 'emailId' && key !== 'emailDomain') {
        signUpFormData.append(key, value);
      }
    }

    // 합친 email을 새 FormData에 추가
    signUpFormData.append('email', email);

    console.log('test', signUpFormData);

    const res = await signUpAction(signUpFormData);
    if (res) {
      redirect('/');
    } else {
      console.log('회원가입 실패');
      // 실패 시 처리 로직 추가 (예: 에러 메시지 표시)
    }
  }
  return (
    <main>
      <SignUpForm handleSignUp={handleSignUp} />
    </main>
  );
}
