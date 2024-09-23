import React from 'react';
import { bestCreateDataType } from '@/types/best/bestTypes';
import GiftItemCard from './GiftItemCard';
function GiftProduct({ data }: { data: bestCreateDataType[] }) {
  return (
    <div className="flex-col mt-4">
      <span className="text-22 font-bold">5만원 미만의 선물하기 좋은 상품</span>
      <GiftItemCard data={data} />

      <div className="mt-16">
        <span className="text-22 font-bold ">
          10만원 미만의 선물하기 좋은 상품
        </span>

        <GiftItemCard data={data} />
      </div>

      <div className="mt-16">
        <span className="text-22 font-bold ">
          10만원 이상 선물하기 좋은 상품
        </span>

        <GiftItemCard data={data} />
      </div>
    </div>
  );
}

export default GiftProduct;
