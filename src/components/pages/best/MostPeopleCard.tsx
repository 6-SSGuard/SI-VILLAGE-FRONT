import React from 'react';
import { bestCreateDataType } from '@/types/best/bestTypes';
import Image from 'next/image';

function MostPeopleCard({ data }: { data: bestCreateDataType[] }) {
  return (
    <div className="grid grid-cols-2 px-8 gap-6 mt-8">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col justify-start">
          <div className="w-[170px] h-[170px]">
            <Image
              src={item.ProductImage}
              alt="STUDIO TOMBOY"
              width={170}
              height={170}
              className="object-cover w-full h-full"
            />
          </div>

          <div className=" mt-4">
            <p className="text-sm font-semibold">{item.Product_Title}</p>
            <p className="text-sm text-gray-500">{item.Product_Content}</p>

            <div className="mt-2">
              <span className="text-orange-500 font-bold text-xs">
                {item.Product_DiscountRate}%
              </span>
              <span className="text-gray-900 font-semibold ml-2 text-xs">
                {item.Product_price.toLocaleString('ko-KR')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostPeopleCard;
