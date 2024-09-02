import React from 'react';
import BottomTabBar from '@/components/layouts/BottomTabBar';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <BottomTabBar />
    </>
  );
}
