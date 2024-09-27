import React from 'react';
import { dealDatas } from '@/datas/dummys/dealDatas';
import { dealListDataType } from '@/types/domainTypes';
import DealListContainer from '@/components/pages/deal/DealListContainer';

async function getDealListData() {
  const res = await dealDatas;

  return res;
}

async function page() {
  const data: dealListDataType = await getDealListData();
  return (
    <main>
      <DealListContainer dealListData={data.data} />
    </main>
  );
}

export default page;
