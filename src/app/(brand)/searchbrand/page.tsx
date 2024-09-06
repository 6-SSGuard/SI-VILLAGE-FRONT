import React from 'react';
import BrandTab from '@/components/pages/brand/BrandTab';
import { Metadata } from 'next';
import { brandData } from '@/datas/dummys/brandDatas';
import { brandListDataType } from '@/types/product/brandType';

export const metadata: Metadata = {
  title: 'Brand',
};

async function getBrandListData() {
  const res = await brandData;
  console.log(res);

  return res;
}

async function page() {
  const Data: brandListDataType = await getBrandListData();
  return (
    <div>
      <BrandTab brandData={Data.data} />
    </div>
  );
}

export default page;
