import { authResponse, commonResType } from '@/types/auth/authType';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(
        credentials: Record<string, string> | undefined,
        req
      ): Promise<any> {
        // console.log('check', credentials);
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // console.log('credential', credentials);

        try {
          const res = await fetch(
            `${process.env.API_BASE_URL}/api/member/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
              cache: 'no-cache',
            }
          );
          const user = (await res.json()) as commonResType<authResponse>;
          return user.result;
        } catch (error) {
          console.error('error', error);
        }
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('kakao', user, account, credentials, profile);
      if (profile) {
        // console.log(profile);
        // 회원인지 아닌지 확인
        const res = await fetch(`${process.env.API_BASE_URL}/auth/oauth2`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oauthId: user.id,
          }),
        });
        console.log('res', res);
        if (res.ok) {
          const user = await res.json();
          console.log('ssg user', user);
          this.session = user;
          // 회원정보를 받아서 세션에 저장
        }

        console.log('not ssg user', user);
        // 회원이 아니면 회원가입 페이지로 이동
        if (!res.ok) {
          // 회원이 아닌 경우
          window.location.href = '/sign-up'; // 회원가입 페이지로 리다이렉트
          return false; // 로그인 실패 처리
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/errors',
  },
  // session: {
  //   strategy: 'jwt',
  // },
};
