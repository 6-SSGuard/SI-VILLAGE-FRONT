'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ColorReq } from '@/types/detail/detailproductinfo';
import { HeartIcon } from 'lucide-react';
import { ShareIcon } from 'lucide-react';
import {
  detailImageListReq,
  detailInforeq,
} from '@/types/detail/detailproductinfo';
import { ProductByProductLikeToggle } from '@/actions/productsAction';
import DetailProductImageList from './DetailProductImageList';
import { ChevronRight } from 'lucide-react';
import { ProductPolicyRequest } from '@/types/product/productsType';
import DetailProductBottomBtn from '@/components/layouts/DetailProductBottomBtn';
import { detailProductOpion } from '@/types/detail/detailproductinfo';
import { StarIcon } from 'lucide-react';
import { productReviewListType } from '@/types/review/reviewType';

function detailProductInfo({
  detailInfoData,
  detailImageData,
  policyData,
  productCode,
  colorData,
  detailProductOpion,
  reviewSize,
}: {
  detailInfoData: detailInforeq;
  policyData: ProductPolicyRequest;
  detailImageData: detailImageListReq[];
  productCode: string;
  colorData: ColorReq;
  detailProductOpion: detailProductOpion;
  reviewSize: number;
}) {
  const [infoData, setinfoData] = useState<detailInforeq>();
  const [Like, setLike] = useState<boolean>(false);
  const [Option, SetOption] = useState<detailProductOpion>();

  //셋 초기 boolean값 지정
  const fetchToggle = async () => {
    const response = await ProductByProductLikeToggle(productCode);
    if (!response?.liked) {
      setLike(!response?.liked);
    }
  };

  // 좋아요 토글 이벤트
  const handleLikeToggle = async () => {
    try {
      const response = await ProductByProductLikeToggle(productCode);
      if (!response) {
        setLike(!Like); // 좋아요 상태 토글
      }
    } catch (error) {
      console.error('Failed to toggle like', error);
    }
  };

  useEffect(() => {
    if (detailInfoData) {
      setinfoData(detailInfoData);
    }

    if (detailProductOpion) {
      SetOption(detailProductOpion);
    }
    fetchToggle();
  }, [detailInfoData, productCode, detailProductOpion]);

  //최종가격
  const discount_resultPrice =
    detailInfoData.price - detailInfoData.price * policyData.discountRate;

  const discountRate = policyData.discountRate * 100;

  const getColorClass = () => {
    switch (colorData.colorCode) {
      case 'black':
        return 'bg-black';
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      default:
        return 'bg-black'; // 기본 색상
    }
  };

  return (
    <div className="">
      <DetailProductImageList data={detailImageData} />
      <div className="py-4 overflow-y-hidden">
        <div className="px-6">
          <ul className="grid grid-cols-10 gap-4  mt-8 ml-2">
            <li className="col-span-6 flex items-center">
              <p className="text-base font-bold">
                {detailInfoData?.brandEngName}
              </p>
              <ChevronRight />
            </li>

            <li className="col-span-4 flex justify-end items-center gap-4">
              {Like ? (
                <Image
                  src="/heartlike.png" // 좋아요 이미지
                  alt="Liked"
                  width={24}
                  height={24}
                  onClick={handleLikeToggle}
                />
              ) : (
                <HeartIcon width={24} height={24} onClick={handleLikeToggle} />
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

          <p className="flex pl-2 mt-2 text-13 underline items-center">
            {reviewSize}건 리뷰
          </p>

          <span className="text-xs pl-2 text-gray-400">
            {colorData.colorName}
          </span>
          <div
            className={`w-[38px]h-[38px] mt-5 border-1 border-gray-400 flex items-center justify-center ${getColorClass()}`}
          ></div>

          <div className="py-1 mt-5 bg-gray-200 "></div>
        </div>

        <div className="px-6 bg-gray-200"></div>
      </div>
      <div className="w-[400px] h-[3500px]">
        {infoData && (
          <iframe
            src={infoData?.detailContent}
            className="h-[3500px] w-[400px] object-cover scrollbar-hide overflow-y-hidden
            pl-2"
          />
        )}
      </div>
      <div className="h-2 bg-gray-200"></div>
      <DetailProductBottomBtn
        colorName={colorData.colorName}
        presentPrice={discount_resultPrice}
        policyData={policyData}
        Like={Like}
        options={detailProductOpion}
      />
    </div>
  );
}
export default detailProductInfo;
