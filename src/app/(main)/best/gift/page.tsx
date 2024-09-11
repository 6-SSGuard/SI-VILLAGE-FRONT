import React from 'react';
import BestButtonList from '@/components/best/BestButtonList';

import { bestData } from '@/datas/bestDatas';
async function getBestAllDatas() {
  const data = await bestData;
  return data;
}

async function page() {
  const data = await getBestAllDatas();

  return (
    <div className="pt-4">
      <BestButtonList data={data.data} />;
    </div>
  );
}

export default page;
