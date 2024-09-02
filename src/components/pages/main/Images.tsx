import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ButtonProps {
  href: string; // 링크 경로
  src: string; // 이미지 경로
  alt: string; // 이미지 대체 텍스트
  label: string; // 버튼 레이블
}

function Images({ href, src, alt, label }: ButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <Link href={href} className="mt-4 flex flex-col items-center">
        <Image
          src={src}
          alt={alt}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full"
        />
        <span className="text-xs font-bold text-center mt-[6px]">{label}</span>
      </Link>
    </div>
  );
}

export default Images;
