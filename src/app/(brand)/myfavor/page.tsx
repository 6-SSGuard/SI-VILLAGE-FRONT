import BrandTab from '@/components/pages/brand/BrandTab';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Brand 찜',
};

function page() {
  return (
    <div>
      <BrandTab />
    </div>
  );
}

export default page;
