import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { HeartIcon } from 'lucide-react';
import { ShareIcon } from 'lucide-react';
import DetailProductImageList from './DetailProductImageList';
import { DetailProductImageData } from '@/types/detail/detailType';
function detailProductInfo({ data }: { data: DetailProductImageData[] }) {
  return (
    <div className="flex flex-col">
      {/* 이미지 슬라이더 */}
      <DetailProductImageList data={data} />

      {/* 상세정보 title, content, price, discount, review */}
      <div className="py-4">
        <div className="px-6">
          <ul className="grid grid-cols-10 gap-4">
            <li className="col-span-6 flex items-center">
              <p className="text-base font-bold">ARMANI EXCHANGE</p>
              <ArrowRightIcon />
            </li>

            <li className="col-span-4 flex justify-end items-center gap-4">
              <HeartIcon />
              <ShareIcon />
            </li>
          </ul>

          <p className="text-lg mt-2">남성 오버픽 나일론 덕다운 패딩</p>

          <div className="flex gap-4 mt-2">
            <p className="text-orange-200 text-2xl font-bold">14%</p>
            <p className="text-2xl font-bold">675,450</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/five-starts.png"
              width={67}
              height={12}
              alt="reviewStar"
              className="object-cover"
            />
            <p className="text-xs">리뷰 건수</p>
          </div>

          <p className="text-xs text-gray-400 mt-4">다크 네이비</p>

          <div className="flex gap-4 py-5 mt-4">
            <div className="w-[38px] h-[38px] border border-gray-300 flex items-center justify-center">
              <Image
                src="https://image.sivillage.com/upload/C00001/goods/org/378/230703005602378.jpg"
                width={38}
                height={38}
                alt="productImage1"
                className="object-cover w-[28px] h-[28px]"
              />
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
