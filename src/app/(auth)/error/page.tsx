'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();
  const { searchParams } = new URL(window.location.href);

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      console.error('인증 오류 발생:', error);
      const timer = setTimeout(() => {
        router.push('/sign-in');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [Error, router]); // 클라이언트 사이드에서만 렌더링

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">인증 오류</h1>
      <p>등록된 아이디가 없습니다. 3초 후에 로그인 페이지로 이동합니다.</p>
    </div>
  );
}

export default page;
