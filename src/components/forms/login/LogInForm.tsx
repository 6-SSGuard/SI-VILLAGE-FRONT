'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

function LogInForm() {
  const auth = useSession();

  useEffect(() => {
    console.log('LogInForm auth', auth);
  }, [auth]);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    // <form className="p-10 text-center" action={handleSignIn}>
    <form className="p-10 text-center" onSubmit={onSubmit}>
      <Input
        type="eamil"
        name="email"
        placeholder="아이디(이메일주소)"
        className="border-[#E0E0E0] placeholder:text-si-text-gray"
      />
      <Input
        className="mt-3 border-[#E0E0E0] placeholder:text-si-text-gray"
        type="password"
        name="password"
        placeholder="비밀번호"
      />

      {/* 체크박스,자동 로그인 ID/PW찾기 레이아웃 */}
      <div>
        {/* 체크박스, 자동 로그인 라벨 부모 레이아웃 */}
        <div className="flex items-start mt-5">
          <Input
            className="w-4 mt-3 accent-black"
            id="term"
            type="checkbox"
          ></Input>
          <label className="text-black-500 mt-5 ml-3 text-sm" htmlFor="term">
            자동로그인
          </label>

          {/* ID와 PW찾기 라벨 부모 레이아웃 */}
          {/* 다른 컴포넌트 구조가 나오면 다음에 페이지 링크 */}
          <div className="text-sm flex mt-5 absolute right-10">
            <Link href={'/sign-in/forgotcredential'}>
              <span className="text-si-text-gray border-b-2"> ID/PW 찾기</span>
            </Link>
          </div>
        </div>
      </div>
      <Button
        className="w-full h-12 mt-5 bg-[#131922] text-white"
        type="submit"
      >
        로그인
      </Button>

      {/* 소셜 로그인 레이아웃 */}
      <div className="flex space-x-6 my-8 items-center justify-center">
        <Image
          src="/images/smartphone.png"
          width={48}
          height={48}
          alt="smartphone"
        ></Image>

        <button onClick={() => signIn('kakao')}>
          <Image
            src="/images/kakaotalk.png"
            width={48}
            height={48}
            alt="Kakao"
          />
        </button>

        <Image
          src="/images/naver.png"
          width={48}
          height={48}
          alt="naver"
        ></Image>
        <Image src="/images/apple.png" alt="apple" width={48} height={48} />
      </div>

      {/* 회원가입 버튼 레이아웃 */}

      <Link
        href="/sign-up"
        className="flex items-center justify-center my-4 mt-10 w-full h-10 text-sm font-semibold bg-white border border-[#E0E0E0] text-black"
      >
        회원가입
      </Link>

      {/* ID/PW 찾기 링크 레이아웃 */}
      <span className="w-100 mt-8 text-sm text-si-text-gray border-b-2">
        {' '}
        비회원 주문조회
      </span>
    </form>
  );
}
export default LogInForm;
