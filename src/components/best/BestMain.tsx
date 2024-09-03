import React from 'react';
import Image from 'next/image';
import { bestCreateDataType } from '@/types/best/bestTypes';

function BestMain({ data }: { data: bestCreateDataType[] }) {
  return (
    <div className="mt-4 overflow-x-hidden">
      {/* First image container */}
      <ul className="flex px-6 gap-3">
        {data.slice(0, 2).map((item, index) => (
          <li key={index} className="flex flex-col w-[170px]">
            <Image
              src={item.ProductImage}
              alt={item.Product_Content}
              width={170}
              height={270}
              className="object-cover h-[270px]"
            />

            <div className="mt-3 p-2 ">
              <p className="text-sm line-clamp-2 text-wrap font-bold">
                {item.Product_Title}
              </p>
              <p className="text-xs mt-2 line-clamp-2 text-wrap ">
                {item.Product_Content}
              </p>

              <div className="flex mt-2">
                <p className="text-xs text-orange-400 line-clamp-2 text-wrap">
                  {item.Product_DiscountRate}%
                </p>
                <p className="text-xs ml-2 line-clamp-2 text-wrap">
                  {item.Product_price.toLocaleString('ko-KR')}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Second image container */}
      <ul className="grid grid-cols-3 px-6 gap-3">
        {data.slice(2, data.length - 1).map((item, index) => (
          <li key={index} className="w-[120px] flex-col">
            <Image
              src={item.ProductImage}
              alt={item.Product_Content}
              width={113}
              height={170}
              className="object-cover h-[170px]"
            />

            <div className="mt-3 pl-2 w-[120px]">
              <p className="text-sm font-bold text-nowrap truncate">
                {item.Product_Title}
              </p>
              <p className="text-xs text-wrap mt-2 line-clamp-2">
                {item.Product_Content}
              </p>

              <div className="flex mt-2">
                <p className="text-xs text-orange-400 text-wrap line-clamp-2">
                  {item.Product_DiscountRate}%
                </p>
                <p className="text-xs ml-2 text-wrap line-clamp">
                  {item.Product_price.toLocaleString('ko-KR')}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestMain;
