import React from 'react';
import CartHeaderNav from '@/components/layouts/CartHeader';
import CartMenuNav from '@/components/layouts/CartMenuNav';
import Footer from '@/components/layouts/Footer';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CartHeaderNav />
      <CartMenuNav />
      {children}
      <Footer />
    </>
  );
}
