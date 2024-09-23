import React from 'react';
import GiftFilter from '@/components/pages/best/GiftFilter';
import { bestData } from '@/datas/dummys/bestDatas';
async function getBestAllDatas() {
  const data = await bestData;
  return data;
}

async function page() {
  const data = await getBestAllDatas();

  return (
    <div className="pt-4 overflow-x-hidden">
      <GiftFilter data={data.data} />;
    </div>
  );
}

export default page;
