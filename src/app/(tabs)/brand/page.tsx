import React from 'react';
import BrandTab from '@/components/pages/brand/BrandTab';
import { Metadata } from 'next';
import { brandData } from '@/datas/dummys/brandDatas';
import { brandListDataType } from '@/types/product/brandType';
import { BrandDataType, getBrand } from '@/actions/brandAction';
import { commonResType } from '@/types/auth/authType';

export const metadata: Metadata = {
  title: 'Brand',
};

async function getBrandListData() {
  const res = await brandData;

  return res;
}

async function page() {
  // const Data: brandListDataType = await getBrandListData();
  const BrandData: BrandDataType[] = await getBrand();
  console.log('data', BrandData);
  return (
    <main>
      <BrandTab brandData={BrandData} />
    </main>
  );
}

export default page;
