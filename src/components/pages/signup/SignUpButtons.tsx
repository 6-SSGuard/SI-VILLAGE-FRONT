'use client';
import Image from 'next/image';
import React from 'react';

const SignUpButtons: React.FC = () => (
  <div className="mb-6 flex flex-col gap-4">
    <button className="bg-[#FEE500] text-black w-full py-3 text-xs flex items-center justify-center gap-2">
      <Image src="/kakaotalk.png" alt="kakao" width={24} height={24} />
      <span>카카오로 가입하기</span>
    </button>
    <button className="bg-[#131922] text-white w-full py-3 text-xs flex items-center justify-center gap-2">
      <Image src="/whitesmartphone.png" alt="phone" width={24} height={24} />
      <span>휴대폰 / 아이핀 인증으로 가입하기</span>
    </button>
  </div>
);

export default SignUpButtons;
