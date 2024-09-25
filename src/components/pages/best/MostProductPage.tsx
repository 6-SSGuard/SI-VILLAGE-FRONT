import React, { useState } from 'react';
import KeywordProduct from '@/components/pages/best/KeywordProduct';

const categortData = [
  { id: 1, name: '스튜디오톰보이' },
  { id: 2, name: '보브' },
  { id: 3, name: '딥디크' },
  { id: 4, name: '르메르' },
  { id: 5, name: '르라보' },
];

function MostProductPage() {
  return (
    <div className="mt-10">
      <p className="text-22 font-bold pl-8 overflow-hidden">
        {' '}
        키워드로 보는 인기상품
      </p>
      <KeywordProduct item={categortData} />
    </div>
  );
}

export default MostProductPage;
