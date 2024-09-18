import React, { ReactNode } from 'react';
import BestCategoryList from '@/components/pages/best/BestCategoryList';
import BestButtonList from '@/components/pages/best/BestButtonList';
import { bestData } from '@/datas/dummys/bestDatas';

async function getBestAllDatas() {
  const data = await bestData;
  return data;
}

async function layout({ children }: { children: ReactNode }) {
  const data = await getBestAllDatas();

  return (
    <div>
      <BestCategoryList />
      {children}
    </div>
  );
}

export default layout;
