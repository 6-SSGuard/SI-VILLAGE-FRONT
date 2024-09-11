'use client';
import React from 'react';
import Footer from '@/components/layouts/Footer';
import BottomTabBar from '@/components/layouts/BottomTabBar';
import AuthServiceHeader from '@/components/layouts/AuthServiceHeader';
import ProductBreadCrumb from '@/components/pages/product/ProductBreadCrumb';
import { usePathname } from 'next/navigation';
import ProductCategoryTab from '@/components/pages/product/ProductCategoryTab';

export default function layout({
  children,
  productinfo,
  reviews,
  modal,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  modal: React.ReactNode;
  reviews: React.ReactNode;
}) {
  const pathname = usePathname();

  const categories = [
    { id: '1', name: '자켓' },
    { id: '2', name: '점퍼' },
    { id: '3', name: '베스트' },
    { id: '4', name: '코트' },
    { id: '5', name: '다운/패딩' },
    { id: '6', name: '퍼/무스탕' },
  ];

  const handleCategorySelect = (category: any) => {
    console.log('Selected category:', category);
  };
  return (
    <>
      <AuthServiceHeader />
      <ProductBreadCrumb pathname={decodeURIComponent(pathname)} />
      <ProductCategoryTab
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      {modal}
      {productinfo}
      {reviews}
      {children}
      <Footer />
      <BottomTabBar />
    </>
  );
}
