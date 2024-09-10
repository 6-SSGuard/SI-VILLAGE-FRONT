/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: false,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'image.sivillage.com',
      'ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  // output: 'standalone',
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
  },
});

export default nextConfig;
