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
import { reviewIdbyReviewList } from '@/actions/reviewActions';
import { StarIcon } from 'lucide-react';
import {
  productReviewListType,
  reviewIdDataType,
} from '@/types/review/reviewType';

function detailProductInfo({
  detailInfoData,
  detailImageData,
  policyData,
  productCode,
  colorData,
  detailProductOpion,
  reviewSize,
  reviewId,
}: {
  detailInfoData: detailInforeq;
  policyData: ProductPolicyRequest;
  detailImageData: detailImageListReq[];
  productCode: string;
  colorData: ColorReq;
  detailProductOpion: detailProductOpion[];
  reviewSize: number;
  reviewId: reviewIdDataType[];
}) {
  const [infoData, setinfoData] = useState<detailInforeq>();
  const [Like, setLike] = useState<boolean>(false);
  const [Option, SetOption] = useState<detailProductOpion[]>([]);
  const [items, setItems] = useState<productReviewListType[]>([]);

  // 별점 표시 함수
  function renderStars(score: number) {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon
          key={`full-${i}`}
          className="w-[12px] h-[12px]"
          style={{ fill: 'black', stroke: 'black' }}
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <div
          key="half"
          className="relative w-[12px] h-[12px]"
          style={{ width: '12px', height: '12px' }}
        >
          <StarIcon
            className="absolute w-[12px] h-[12px]"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
              fill: 'black',
              stroke: 'black',
            }}
          />
          <StarIcon
            className="absolute text-gray-300 w-[12px] h-[12px]"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              fill: 'transparent',
            }}
          />
        </div>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarIcon
          key={`empty-${i}`}
          className="w-[12px] h-[12px] text-gray-300"
          style={{ fill: 'transparent', stroke: '#black' }}
        />
      );
    }
    return stars;
  }
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
    const fetchReviewData = async () => {
      try {
        const reviewListData = await Promise.all(
          reviewId.map(async (item) => {
            const reviews = await reviewIdbyReviewList(item.id);
            return reviews;
          })
        );

        const flattenedData = reviewListData.flat();
        setItems(flattenedData);
      } catch (error) {
        console.error('Failed to fetch review data', error);
      }
    };
    if (detailInfoData) {
      setinfoData(detailInfoData);
    }

    if (detailProductOpion) {
      SetOption(detailProductOpion);
    }
    fetchToggle();
    fetchReviewData();
  }, [detailInfoData, productCode, detailProductOpion, reviewId]);

  //최종가격
  const discount_resultPrice =
    detailInfoData.price - detailInfoData.price * policyData.discountRate;

  const discountRate = policyData.discountRate * 100;

  return (
    <div className="">
      <DetailProductImageList data={detailImageData} />
      <div className="py-4">
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
                  src="/images/heartlike.png" // 좋아요 이미지
                  alt="Liked"
                  width={24}
                  height={24}
                  onClick={handleLikeToggle}
                  className="scale-75"
                />
              ) : (
                <HeartIcon
                  width={24}
                  height={24}
                  onClick={handleLikeToggle}
                  className="scale-75"
                />
              )}
              <Image
                src="/images/share.png"
                alt="share"
                width={24}
                height={24}
                className="scale-75"
              />
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

          <div className="flex pl-2 mt-6 items-center">
            {items.slice(0, 1).map((item, index) => (
              <div className="flex " key={index}>
                {renderStars(item.score)}
              </div>
            ))}
            <p className="flex pl-2 text-13 underline">{reviewSize}건 리뷰</p>
          </div>
          {Option.map((item, index) => (
            <>
              <div key={index} className="mt-6">
                <span key={index} className="text-xs pl-2  text-gray-400">
                  {item.volume}
                </span>
              </div>
              <div className="w-[38px] h-[38px] mt-2 ml-2 border border-black flex items-center justify-center">
                <span className="text-8 font-bol">{item.volume}</span>
              </div>
            </>
          ))}
        </div>

        <div className=" h-2 mt-14 bg-gray-200"></div>
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
