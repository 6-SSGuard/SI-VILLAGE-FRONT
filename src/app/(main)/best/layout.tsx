import React, { ReactNode } from 'react';
import BestButtonList from '@/components/pages/best/BestButtonList';
import BestCategoryList from '@/components/pages/best/BestCategoryList';

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BestCategoryList />
      {children}
    </div>
  );
}

export default layout;
