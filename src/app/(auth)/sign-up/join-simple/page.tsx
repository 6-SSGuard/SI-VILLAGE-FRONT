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
    console.log('test', formData);

    // 이메일 아이디와 도메인을 합치기
    const emailId = formData.get('emailId') as string;
    const emailDomain = formData.get('emailDomain') as string;
    const email = `${emailId}@${emailDomain}`;

    console.log('domain', emailDomain);

    // 년, 월, 일 받아서 birth로 합치기
    const year = formData.get('year') as string;
    const month = formData.get('month') as string;
    const day = formData.get('day') as string;

    let birth = null;
    if (year && month && day) {
      birth = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`; // YYYY-MM-DD 형식으로 변환
    }

    // 새로운 FormData 객체 생성
    const signUpFormData = new FormData();

    if (birth) {
      signUpFormData.append('birth', birth);
    }

    // 기존 FormData의 모든 필드를 새 FormData에 복사 (email 제외)
    for (const [key, value] of formData.entries()) {
      if (key !== 'emailId' && key !== 'emailDomain') {
        signUpFormData.append(key, value);
      }
    }

    // 합친 email을 새 FormData에 추가
    signUpFormData.append('email', email);

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
