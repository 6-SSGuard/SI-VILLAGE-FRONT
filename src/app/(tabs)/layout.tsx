'use client';
import React from 'react';
import Footer from '@/components/layouts/Footer';
import BottomTabBar from '@/components/layouts/BottomTabBar';
import AuthServiceHeader from '@/components/layouts/AuthServiceHeader';
import { usePathname } from 'next/navigation';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <>
      {pathname == '/brand' && <AuthServiceHeader />}
      {children}
      {pathname == '/brand' && <Footer />}
      <BottomTabBar />
    </>
  );
}
