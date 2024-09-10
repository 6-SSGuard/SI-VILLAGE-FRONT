import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FilterIcon, Key } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import { DetailPhotoReviewDataType } from '@/types/detail/detailReviewPhotoType';
import DetailPhotoReviewImageList from './DetailPhotoReviewImageList';
import { DetailReviewDataType } from '@/types/detail/detailReviewListType';
import { Button } from '@/components/ui/button';
function DetailReview({
  photoData,
  ListData,
}: {
  photoData: DetailPhotoReviewDataType[];
  ListData: DetailReviewDataType[];
}) {
  return (
    //리뷰 페이지 전체 크기 레이아웃
    <div className="flex-col h-auto">
      {/* 리뷰 별점, 포토리뷰 레이아웃 */}
      <div className="flex-col px-3">
        {/* 리뷰 상단 레이아웃 */}
        <div className="flex p-3 justify-between">
          <p className="text-base font-bold">리뷰</p>
          <p className="text-sm text-gray-500 underline">리뷰 혜택보기</p>
        </div>

        {/* 리뷰 중단 레이아웃 */}
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-3xl font-bold">별점</p>
          <StarIcon
            width={100}
            height={20}
            className="w-[110px] h-[24px] object-cover mt-1"
          ></StarIcon>
        </div>

        {/* 포토리뷰 */}
        <div className="flex flex-col px-3 py-2">
          <p className="text-sm font-light">포토리뷰 모아보기</p>

          {/* 포토리뷰 컴포넌트 */}
          <DetailPhotoReviewImageList photoData={photoData} />
        </div>
      </div>

      <div className="py-1 bg-gray-200"></div>

      {/* 전체 리뷰 페이지 */}
      <div className="h-10 mt-1 flex items-center justify-end pr-3">
        <FilterIcon />
      </div>

      <div className="border border-gray-200"></div>

      {/* 리뷰 아이템 */}
      <div className="flex-col h-[152px] mt-3 mx-4 pl-2 ">
        <ul className="flex-col overflow-hidden text-wrap">
          {ListData.slice(0, 3).map((item) => (
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
                  ></Image>

                  <p className="text-xs ml-2">{item.count}</p>
                </div>
              </li>

              <li className="flex py-2 mt-2 text-xs text-gray-600">
                구매옵션: {''}{' '}
                <p className="text-xs text-gray-600">{item.color}</p> {'/'}{' '}
                <p className="text-xs text-gray-600">{item.size}</p>
              </li>

              <li className="mt-2 h-[60px] ">
                <p className="flex text-sm">{item.content}</p>
              </li>

              <div className="border border-gray-200 mt-6"></div>
              <div className="py-2"></div>
            </div>
          ))}
        </ul>

        <Link href="/detailreviewList">
          <div className="px-2 py-4">
            <Button className="text-sm border border-gray-200 w-full h-full">
              리뷰 전체 보기
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DetailReview;
