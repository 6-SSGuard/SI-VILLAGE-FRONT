import {
  authResponse,
  commonResType,
  userDataType,
} from '@/types/auth/authType';
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

        try {
          const res = await fetch(
            `${process.env.API_BASE_URL}/api/auth/sign-in`,
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
          if (user?.result) {
            return {
              ...user.result,
              accessToken: user.result.accessToken, // 액세스 토큰 포함
              refreshToken: user.result.refreshToken, // 리프레시 토큰 포함
            };
          }
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
      if (profile && account) {
        console.log('profile', profile);
        console.log('account', account);
        console.log('user', user);
        try {
          const res = await fetch(`${process.env.API_BASE_URL}/auth/oauth2`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              provider: account.provider,
              providerId: account.providerAccountId,
              providerEmail: 'dud_wls_95@naver.com',
            }),
            cache: 'no-cache',
          });
          const data = (await res.json()) as commonResType<userDataType>;
          console.log('server data', data);
          // user.accessToken = data.result.accessToken;
          user.name = data.result.name;
          // user.uuid = data.result.uuid;
          console.log('kakao', user);
          return true;
        } catch (error) {
          console.error('error', error);
          return '/sign-up';
        }
        // console.log('res', res);

        // if (res.ok) {
        //   const user = await res.json();
        //   console.log('ssg user', user);
        //   this.session = user;
        //   // 회원정보를 받아서 세션에 저장
        // }

        // console.log('not ssg user', user);
        // // 회원이 아니면 회원가입 페이지로 이동
        // if (!res.ok) {
        //   // 회원이 아닌 경우
        //   return '/sign-up?message=test'; // 로그인 실패 처리
        // }
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
};
