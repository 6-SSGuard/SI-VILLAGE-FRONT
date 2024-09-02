import AuthServiceHeader from '@/components/layouts/AuthServiceHeader';
import BottomTabBar from '@/components/layouts/BottomTabBar';
import Footer from '@/components/layouts/Footer';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthServiceHeader />
      {children}
      <BottomTabBar />
      <Footer />
    </>
  );
}
