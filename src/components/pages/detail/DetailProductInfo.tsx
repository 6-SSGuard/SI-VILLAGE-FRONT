'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { HeartIcon } from 'lucide-react';
import { ShareIcon } from 'lucide-react';
import {
  detailImageListReq,
  detailInforeq,
} from '@/types/detail/detailproductinfo';
import { ProductByProductLikeToggle } from '@/actions/productsAction';
import DetailProductImageList from './DetailProductImageList';
import { ChevronRight } from 'lucide-react';

function detailProductInfo({
  detailInfoData,
  detailImageData,
  discount,
  productCode,
}: {
  detailInfoData: detailInforeq;
  discount: number;
  detailImageData: detailImageListReq[];
  productCode: string;
}) {
  const [infoData, setinfoData] = useState<detailInforeq>();
  const [Like, setLike] = useState<boolean>(false);

  const LikeToggleEvent = async () => {
    try {
      const response = await ProductByProductLikeToggle(productCode);

      //api에서 불러온 값이 undefinded면 토글 이벤트 적용
      if (response) {
        setLike(!Like);
      }
    } catch (error) {
      console.error('Failed to fetch LikeToggle', error);
    }
  };

  console.log(Like, 'toggle');

  useEffect(() => {
    if (detailInfoData) {
      setinfoData(detailInfoData);
    }

    const ToggleDataResetListener = async () => {
      const response = await ProductByProductLikeToggle(productCode);
      if (response == undefined) setLike(false);
    };
    console.log(Like, 'test Reset');
    ToggleDataResetListener();
  }, [detailInfoData, productCode]);

  const discount_resultPrice =
    detailInfoData.price - detailInfoData.price * discount;

  const discountRate = discount * 100;

  return (
    <div className="">
      <DetailProductImageList data={detailImageData} />
      <div className="py-4 overflow-y-hidden">
        <div className="px-6">
          <ul className="grid grid-cols-10 gap-4  mt-8 ml-2">
            <li className="col-span-6 flex items-center">
              <p className="text-base font-bold">{infoData?.brandEngName}</p>
              <ChevronRight />
            </li>

            <li className="col-span-4 flex justify-end items-center gap-4">
              {Like ? (
                <Image
                  src="/heartlike.png" // 좋아요 이미지
                  alt="Liked"
                  width={24}
                  height={24}
                  onClick={LikeToggleEvent}
                />
              ) : (
                <HeartIcon width={24} height={24} onClick={LikeToggleEvent} />
              )}
              <ShareIcon />
            </li>
          </ul>

          <p className="text-lg font-semibold mt-4 ml-2">
            {infoData?.productName}
          </p>

          <div className="flex mt-4 text-center ml-2">
            <p className="text-orange-400 text-2xl font-bold ">
              {discountRate}%
            </p>
            <p className="text-2xl font-bold ml-2">
              {discount_resultPrice.toLocaleString('ko-KR')}
            </p>
            <p className="text-base mt-1 ml-1">원</p>
            <p className="text-base text-gray-600 line-through mt-1 ml-3">
              {infoData?.price.toLocaleString('ko-KR')}
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
          </div>

          <div className="flex gap-4 py-5 mt-4">
            <div className="w-[38px] h-[38px] border border-gray-300 flex items-center justify-center"></div>
          </div>

          <div className="py-1 mt-5 bg-gray-200 "></div>
        </div>

        <div className="px-6 bg-gray-200"></div>
      </div>

      <div className="w-[420px] h-full scrollbar-hide flex justify-center ml-1">
        {infoData && (
          <iframe
            src={infoData?.detailContent}
            className="h-[3500px] w-[400px] object-cover overflow-x-hidden"
          />
        )}
      </div>
    </div>
  );
}
export default detailProductInfo;
