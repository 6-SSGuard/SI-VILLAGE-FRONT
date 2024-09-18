import React from 'react';
import BestButtonList from '@/components/pages/best/BestButtonList';
import GiftProduct from '@/components/pages/best/GiftProductPage';
import { bestData } from '@/datas/dummys/bestDatas';
async function getBestAllDatas() {
  const data = await bestData;
  return data;
}

async function page() {
  const data = await getBestAllDatas();

  return (
    <div className="pt-4 overflow-x-hidden">
      <GiftProduct data={data.data} />;
    </div>
  );
}

export default page;
