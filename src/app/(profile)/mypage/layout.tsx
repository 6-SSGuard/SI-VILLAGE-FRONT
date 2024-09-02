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
      <footer className="pb-12 bg-gray-100 text-black mt-4">
        <Footer />
      </footer>

      <BottomTabBar />
    </>
  );
}
