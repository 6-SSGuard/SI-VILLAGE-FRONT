import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
