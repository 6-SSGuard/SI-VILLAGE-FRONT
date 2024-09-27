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

function detailProductInfo({
  detailInfoData,
  detailImageData,
  policyData,
  productCode,
  colorData,
}: {
  detailInfoData: detailInforeq;
  policyData: ProductPolicyRequest;
  detailImageData: detailImageListReq[];
  productCode: string;
  colorData: ColorReq;
}) {
  const [infoData, setinfoData] = useState<detailInforeq>();
  const [Like, setLike] = useState<boolean>(false);
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

    fetchToggle();
  }, [detailInfoData, productCode]);

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

          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/five-starts.png"
              width={67}
              height={12}
              alt=""
              className="object-cover"
            />

            <p className="pl-2 text-13">4.6</p>
          </div>

          <p className="pl-2 text-xs text-gray-400 mt-3">
            {colorData.colorName}
          </p>
          <div className="flex gap-4 py-5 pl-2">
            <div
              className={`w-[38px] h-[38px] border-1 border-gray-300 flex items-center justify-center ${getColorClass()}`}
            ></div>
          </div>

          <div className="py-1 mt-5 bg-gray-200 "></div>
        </div>

        <div className="px-6 bg-gray-200"></div>
      </div>
      <div className="w-[400px] h-[3500px] scrollbar-hide overflow-y-hidden">
        {infoData && (
          <iframe
            src={infoData?.detailContent}
            className="h-[3500px] w-[400px] object-cover scrollbar-hide overflow-y-hidden"
          />
        )}
      </div>
      <DetailProductBottomBtn
        colorName={colorData.colorName}
        presentPrice={discount_resultPrice}
        policyData={policyData}
        Like={Like}
      />
    </div>
  );
}
export default detailProductInfo;
