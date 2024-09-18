import React from 'react';
import Image from 'next/image';
import { bestCreateDataType } from '@/types/best/bestTypes';
function GiftItemCard({ data }: { data: bestCreateDataType[] }) {
  return (
    <div className="flex w-full h-[280px] gap-2 mt-10 overflow-x-auto scrollbar-hide">
      {data.map((item, index) => (
        <div key={index}>
          <div className="">
            <Image
              src={item.ProductImage}
              alt="STUDIO TOMBOY"
              width={170}
              height={170}
              className="object-cover w-[170px] h-[170px] min-w-[170px] min-h-[170px]"
            />
          </div>

          <div className="">
            <p className="text-sm font-semibold mt-4">{item.Product_Title}</p>
            <p className="text-sm text-gray-500">{item.Product_Content}</p>

            <div className="mt-2">
              <span className="text-orange-500 font-bold text-xs">
                {item.Product_DiscountRate}%
              </span>
              <span className=" text-gray-900 font-semibold ml-2 text-xs">
                {item.Product_price.toLocaleString('ko-KR')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GiftItemCard;
