import React from 'react';
import Footer from '@/components/layouts/Footer';
import ProductDetailHeader from '@/components/layouts/ProductDetailHeader';
import DetailProductBottomBtn from '@/components/layouts/DetailProductBottomBtn';
export default function layout({
  modal,
  productinfo,
  children,
  reviews,
  productqna,
}: {
  modal: React.ReactNode;
  productinfo: React.ReactNode;
  children: React.ReactNode;
  reviews: React.ReactNode;
  productqna: React.ReactNode;
}) {
  return (
    <>
      <ProductDetailHeader />
      {modal}
      {productinfo}
      {reviews}
      {productqna}
      {children}
      <Footer />
      <DetailProductBottomBtn />
    </>
  );
}
