export { default } from 'next-auth/middleware';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';

const protectedPages = ['/mypage'];

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (session) {
    // 로그인이 되어있는 경우
    return NextResponse.next();
  } else {
    // 로그인이 되어있지 않은 경우
    const pathname = request.nextUrl.pathname;
    if (protectedPages.some((page) => pathname.startsWith(page))) {
      // 보호된 페이지에 접근하려는 경우
      return NextResponse.redirect(new URL('/sign-in', request.url));
    } else {
      // 보호된 페이지가 아닌 경우
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ['/mypage'],
};
