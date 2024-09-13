'use client';
import React from 'react';
import Footer from '@/components/layouts/Footer';
import ProductDetailHeader from '@/components/layouts/ProductDetailHeader';
import DetailProductBottomBtn from '@/components/layouts/DetailProductBottomBtn';

export default function layout({
  children,
  productinfo,
  reviews,
  modal,
  productqna,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  modal: React.ReactNode;
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
