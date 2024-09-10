import React from 'react';
import BestButtonList from '@/components/pages/best/BestButtonList';
import BestMain from '@/components/pages/best/BestMain';
import { bestData } from '@/datas/dummys/bestDatas';
import { bestCreateListDataType } from '@/types/best/bestTypes';

async function getBestListData() {
  const res = await bestData;
  return res;
}

async function page() {
  const Data: bestCreateListDataType = await getBestListData();

  return (
    <main className="pt-4">
      <BestButtonList />
      <BestMain data={Data.data} />
    </main>
  );
}

export default page;
