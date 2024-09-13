'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FilterIcon, StarIcon } from 'lucide-react';
import { DetailReviewInfoDataType } from '@/types/detail/detailReviewType';
import DetailPhotoReviewImageList from './DetailPhotoReviewImageList';
import { Button } from '@/components/ui/button';
import DetailAllReviewModal from './DetailAllReviewModal';

function DetailReview({
  data,
  count,
}: {
  data: DetailReviewInfoDataType[];
  count: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEvent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-auto">
      {/* 전체 리뷰 모달 */}
      {isOpen && (
        <DetailAllReviewModal
          data={data}
          count={count}
          // onClose={handleEvent} // 모달 닫기 상태
        />
      )}

      {/* 리뷰 페이지 전체 크기 레이아웃 */}
      <div
        className={`${
          isOpen ? 'hidden' : 'h-full'
        } scrollbar-hide gap-1 flex-col h-full`}
      >
        {/* 리뷰 상단 레이아웃 */}
        <div className="flex-col px-3">
          <div className="flex p-3 justify-between">
            <p className="text-base font-bold">리뷰</p>
            <p className="text-sm text-gray-500 underline">리뷰 혜택보기</p>
          </div>

          {/* 리뷰 중단 레이아웃 */}
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-3xl font-bold">4.9</p>
            <StarIcon
              width={100}
              height={20}
              className="w-[110px] h-[24px] object-cover mt-1"
            />
          </div>

          {/* 포토리뷰 */}
          <div className="flex flex-col px-3 py-2">
            <p className="text-sm font-light">포토리뷰 모아보기</p>
            <DetailPhotoReviewImageList photoData={data} />
          </div>
        </div>

        <div className="py-1 bg-gray-200"></div>

        {/* 전체 리뷰 페이지 */}
        <div className="h-10 mt-1 flex items-center justify-end pr-3">
          <FilterIcon />
        </div>
        <div className="border border-gray-200"></div>

        {/* 리뷰 아이템 */}
        <div className="flex-col h-auto mt-3 mx-4 pl-2">
          <ul className="flex-col overflow-hidden text-wrap">
            {data.slice(0, 3).map((item) => (
              <div className="flex-col" key={item.id}>
                {/* 별점 */}
                <li>
                  <StarIcon />

                  {/* 닉네임, 날짜 */}
                </li>

                <li className="flex mt-2">
                  <div className="flex">
                    <p className="text-xs text-gray-600">{item.nickname}</p>
                    <p className="text-gray-600 ml-2 text-xs">|</p>
                    <p className="text-gray-600 ml-2 text-xs">{item.date}</p>
                  </div>

                  <div className="flex w-full ml-48">
                    <Image
                      src="/like.png"
                      width={24}
                      height={24}
                      alt="like"
                      className="w-[16px] h-[16px] object-cover"
                    />
                    <p className="text-xs ml-2">{item.likeNumber}</p>
                  </div>
                </li>

                <li className="flex py-2 mt-2 text-xs text-gray-600">
                  구매옵션: {''}{' '}
                  <p className="text-xs text-gray-600">{item.color}</p> {'/'}{' '}
                  <p className="text-xs text-gray-600">{item.size}</p>
                </li>

                <li className="mt-2 h-[60px]">
                  <p className="flex text-sm">{item.content}</p>
                </li>

                <div className="border border-gray-200 mt-6"></div>
                <div className="py-2"></div>
              </div>
            ))}
          </ul>

          <div className="px-2 py-4">
            <Button
              className="text-sm border border-gray-200 w-full h-full"
              onClick={handleEvent}
            >
              리뷰 전체 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
