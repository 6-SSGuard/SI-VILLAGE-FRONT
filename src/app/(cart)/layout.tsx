import React from 'react';
import CartHeaderNav from '@/components/layouts/CartHeader';
import CartMenuNav from '@/components/layouts/CartMenuNav';
import CartBottomNav from '@/components/layouts/CartBottomNav';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CartHeaderNav />
      <CartMenuNav />
      {children}
      <CartBottomNav />
    </>
  );
}
