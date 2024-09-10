import React from 'react';
import { dealDatas } from '@/datas/dummys/dealDatas';
import { dealListDataType } from '@/types/domainTypes';
import DealPage from './dealmain/dealListContainer';

async function getDealListData() {
  const res = await dealDatas;

  return res;
}

async function dealPage() {
  const data: dealListDataType = await getDealListData();
  return (
    <main>
      <DealPage dealListData={data.data} />
    </main>
  );
}

export default dealPage;
