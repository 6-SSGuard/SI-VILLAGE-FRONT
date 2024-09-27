import React from 'react';
import MainTab from '@/components/pages/main/MainTab';
import Footer from '@/components/layouts/Footer';
import BottomTabBar from '@/components/layouts/BottomTabBar';
import AuthServiceHeader from '@/components/layouts/AuthServiceHeader';
import ScrollToTopButton from '@/components/layouts/ScrollToTopButton';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthServiceHeader />
      <MainTab />
      {children}
      <Footer />
      <ScrollToTopButton />
      <BottomTabBar />
    </>
  );
}
