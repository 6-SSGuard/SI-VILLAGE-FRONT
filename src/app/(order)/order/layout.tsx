import React from 'react';
import CartHeaderNav from '@/components/layouts/CartHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CartHeaderNav />
      {children}
    </>
  );
}
