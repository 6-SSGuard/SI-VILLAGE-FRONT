import React from 'react';
import MostProductPage from '@/components/pages/best/MostProductPage';
import MostPeopleProduct from '@/components/pages/best/MostPeopleProduct';
async function page() {
  return (
    <main>
      <div className="flex-col overflow-auto">
        {/* 키워드로 보는 인기상품 컴포넌트 */}
        <MostProductPage />

        {/* 사람들이 많이 본 인기상품 컴포넌트 */}
        <MostPeopleProduct />
      </div>
    </main>
  );
}

export default page;
