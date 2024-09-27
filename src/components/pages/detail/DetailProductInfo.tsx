'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { HeartIcon } from 'lucide-react';
import { ShareIcon } from 'lucide-react';
import { detailInforeq } from '@/types/detail/detailproductinfo';
import { detailthumnailImagereq } from '@/types/detail/detailproductinfo';
function detailProductInfo({
  detailInfoData,
  detailthumnailData,
}: {
  detailInfoData: detailInforeq;
  detailthumnailData: detailthumnailImagereq;
}) {
  const [detailinfoData, setinfoData] = useState<detailInforeq>();
  useEffect(() => {
    if (detailInfoData) {
      setinfoData(detailInfoData);
    }
  }, [detailInfoData]);

  console.log(detailInfoData, 'test test test');
  return (
    <div className="flex flex-col">
      <div className="py-4">
        <div className="px-6">
          {detailthumnailData && (
            <>
              <Image
                src={detailthumnailData.thumbnailUrl}
                width={400}
                height={400}
                alt="thumbnail"
              />
            </>
          )}
          <ul className="grid grid-cols-10 gap-4">
            <li className="col-span-6 flex items-center">
              <p className="text-base font-bold">
                {detailinfoData?.brandEngName}
              </p>
              <ArrowRightIcon />
            </li>

            <li className="col-span-4 flex justify-end items-center gap-4">
              <HeartIcon />
              <ShareIcon />
            </li>
          </ul>

          <p className="text-lg mt-2">{detailinfoData?.productName}</p>

          <div className="flex gap-4 mt-2">
            <p className="text-orange-200 text-2xl font-bold">20%</p>
            <p className="text-2xl font-bold">
              {detailinfoData?.price.toLocaleString('ko-KR')}원
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/five-starts.png"
              width={67}
              height={12}
              alt="reviewStar"
              className="object-cover"
            />
            {/* <p className="text-xs">{ProductItemData?.productReviewCount}</p> */}
          </div>

          {/* <p className="text-xs text-gray-400 mt-4">{item?.Color}</p> */}

          <div className="flex gap-4 py-5 mt-4">
            <div className="w-[38px] h-[38px] border border-gray-300 flex items-center justify-center">
              {/* {ProductItemData?.productColorImageList.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item}
                      width={38}
                      height={38}
                      alt="productImage1"
                      className="object-cover w-[28px] h-[28px]"
                    />
                  </div>
                ))} */}
            </div>
          </div>
        </div>

        <div className="py-1 mt-5 bg-gray-200 "></div>
      </div>
      {/* 할인쿠폰 */}
      <div className=" px-6 bg-gray-200">{/* 할인쿠폰 내용 추가 */}</div>

      {detailinfoData && (
        <iframe
          src={detailinfoData?.detailContent}
          className="h-[3500px] object-cover overflow-y-hidden"
        />
      )}
    </div>
  );
}
export default detailProductInfo;
