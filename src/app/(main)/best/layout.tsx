import React, { ReactNode } from 'react';
import BestButtonList from '@/components/best/BestButtonList';
import BestCategoryList from '@/components/best/BestCategoryList';

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BestCategoryList />
      {children}
    </div>
  );
}

export default layout;
