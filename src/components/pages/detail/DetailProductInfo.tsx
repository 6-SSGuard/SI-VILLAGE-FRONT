'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { HeartIcon } from 'lucide-react';
import { ShareIcon } from 'lucide-react';
import DetailProductImageList from './DetailProductImageList';
import { DetailProductInfoData } from '@/types/detail/detailproductinfo';
function detailProductInfo({ data }: { data: DetailProductInfoData[] }) {
  //베스트 페이지에서 전달받은 productname확인
  //라우터 객체 생성 => 전달받은 라우팅값을 productname 에 저장
  const router = useParams();
  const productname = router.productname;
  const ProductItemData = data.find((item) => item.productname === productname);

  return (
    <div className="flex flex-col">
      {/* 이미지 슬라이더 */}
      <DetailProductImageList data={data} />

      {/* 상세정보 title, content, price, discount, review */}
      <div className="py-4">
        <div className="px-6">
          <ul className="grid grid-cols-10 gap-4">
            <li className="col-span-6 flex items-center">
              <p className="text-base font-bold">
                {ProductItemData?.productTitle}
              </p>
              <ArrowRightIcon />
            </li>

            <li className="col-span-4 flex justify-end items-center gap-4">
              <HeartIcon />
              <ShareIcon />
            </li>
          </ul>

          <p className="text-lg mt-2">{ProductItemData?.productContent}</p>

          <div className="flex gap-4 mt-2">
            <p className="text-orange-200 text-2xl font-bold">
              {ProductItemData?.productdiscountRate}%
            </p>
            <p className="text-2xl font-bold">
              {ProductItemData?.productPrice.toLocaleString('ko-KR')}원
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
            <p className="text-xs">{ProductItemData?.productReviewCount}</p>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            {ProductItemData?.productCurrentColor}
          </p>

          <div className="flex gap-4 py-5 mt-4">
            <div className="w-[38px] h-[38px] border border-gray-300 flex items-center justify-center">
              {ProductItemData?.productColorImageList.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item}
                    width={38}
                    height={38}
                    alt="productImage1"
                    className="object-cover w-[28px] h-[28px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-1 mt-5 bg-gray-200 "></div>
      </div>

      {/* 할인쿠폰 */}
      <div className=" px-6 bg-gray-200">{/* 할인쿠폰 내용 추가 */}</div>
    </div>
  );
}

export default detailProductInfo;
