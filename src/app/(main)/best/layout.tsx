import React, { ReactNode } from 'react';
import BestCategoryList from '@/components/pages/best/BestCategoryList';
import BestButtonList from '@/components/pages/best/BestButtonList';
import { bestData } from '@/datas/dummys/bestDatas';

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BestCategoryList />
      {children}
    </div>
  );
}

export default layout;
