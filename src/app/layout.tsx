import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import AuthContextProvider from '@/providers/AuthContextProvider';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SI SSG(Q)uad',
    template: '%s | SI SSG(Q)uad',
  },
  description: '1차프로젝트 SPHAROS 5TH',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://spharos5th.com'),
  openGraph: {
    url: 'https://spharos5th.com',
    title: 'SPHAROS 5TH',
    description: '1차프로젝트 SPHAROS 5TH',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  return (
    <html lang="ko">
      <body className={inter.className}>
        {' '}
        <AuthContextProvider isAuth={isAuth}>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
