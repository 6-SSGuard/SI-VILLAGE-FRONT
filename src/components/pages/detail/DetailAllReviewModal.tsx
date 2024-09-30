'use client';
import {
  reviewIdbyReviewList,
  reviewIdbyReviewImage,
} from '@/actions/reviewActions';
import { getReviewImage } from '@/types/review/reviewType';
import { productReviewListType } from '@/types/review/reviewType';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { reviewIdDataType } from '@/types/review/reviewType';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { StarIcon } from 'lucide-react';
import { detailProductOpion } from '@/types/detail/detailproductinfo';

function DetailAllReviewModal({
  id,
  productname,
  detailProductOption,
}: {
  id: reviewIdDataType[];
  productname: string;
  detailProductOption: detailProductOpion[];
}) {
  console.log(productname, 'afafaf');
  const [items, setItems] = useState<productReviewListType[]>([]); // Use a flat array for all reviews
  const [images, setImages] = useState<getReviewImage[]>([]); // 이미지 배열
  const [Option, SetOption] = useState<detailProductOpion[]>([]);

  // 별점 표시 함수
  function renderStars(score: number) {
    const fullStars = Math.floor(score); // 꽉 찬 별 개수
    const hasHalfStar = score % 1 !== 0; // 반 별 유무 확인
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // 빈 별 개수 계산
    const stars = [];

    // 꽉 찬 별 추가 (진한 오렌지색으로 별 내부를 채움)
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon
          key={`full-${i}`}
          className="w-[18px] h-[18px] "
          style={{ fill: '#FF8C00', stroke: '#FF8C00' }} // 별 내부와 외부를 진한 오렌지색으로 채움
        />
      );
    }

    // 반 별 추가 (반쪽은 오렌지색으로 채움)
    if (hasHalfStar) {
      stars.push(
        <div
          key="half"
          className="relative w-[18px] h-[18px]"
          style={{ width: '18px', height: '18px' }} // 18px 크기에 맞게 수정
        >
          {/* 왼쪽 절반을 오렌지색으로 채움 */}
          <StarIcon
            className="absolute w-[18px] h-[18px] "
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)', // 왼쪽 절반 클리핑
              fill: '#FF8C00',
              stroke: '#FF8C00',
            }}
          />
          {/* 오른쪽 절반은 빈 별 */}
          <StarIcon
            className="absolute text-gray-300 w-[18px] h-[18px]"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)', // 오른쪽 절반 클리핑
              fill: 'transparent', // 빈 색상
            }}
          />
        </div>
      );
    }

    // 빈 별 추가 (회색으로 처리)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarIcon
          key={`empty-${i}`}
          className="w-[18px] h-[18px] text-gray-300"
          style={{ fill: 'transparent', stroke: '#FF8C00' }} // 테두리는 오렌지색, 내부는 빈 별
        />
      );
    }

    return stars;
  }

  function maskText(text: string, visibleLength: number) {
    if (text.length <= visibleLength) {
      return text; // visibleLength보다 짧으면 마스킹하지 않음
    }

    const visiblePart = text.slice(0, visibleLength); // 앞의 일정 부분만 보임
    const maskedPart = '*'.repeat(text.length - visibleLength); // 나머지 부분은 별표로 처리
    return visiblePart + maskedPart;
  }

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const reviewListData = await Promise.all(
          id.map(async (item) => {
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

    const fetchReviewImage = async () => {
      try {
        const reviewImageData = await Promise.all(
          id.map(async (item) => {
            const images = await reviewIdbyReviewImage(item.id);
            return images;
          })
        );

        const flattenedImages = reviewImageData.flat();
        setImages(flattenedImages);
      } catch (error) {
        console.error('Failed to fetch review images', error);
      }
    };

    if (detailProductOption) {
      SetOption(detailProductOption);
    }

    fetchReviewData();
    fetchReviewImage();
  }, [id, detailProductOption]);

  const router = useRouter();
  return (
    <div className="flex-col overflow-y-auto w-full">
      {/* 헤더바 */}
      <ul className="flex-col px-8">
        <div className="flex sticky top-0 left-3 h-12 bg-white items-center justify-center mt-4">
          <p className="text-lg pl-18">리뷰 전체 보기</p>
          <p className="text-gray-500 ">{`(${items.length})`}</p>
          <Button
            className="rounded-full fill absolute right-0 ml-8 top-1/2 transform -translate-y-1/2 w-[32px] h-[32px]"
            onClick={() => router.back()}
          >
            {'X'}
          </Button>
        </div>

        {items.length > 0 ? (
          items.map((review, index) => (
            <div className="flex-col mt-10" key={index}>
              {/* 별점 */}
              <li className="flex gap-2">{renderStars(review.score)}</li>

              {/* 닉네임, 날짜 */}
              <li className="flex mt-2 w-full justify-between">
                <div className="flex">
                  <p className="text-xs text-gray-500">
                    {maskText(review.authorEmail, 4)}
                  </p>
                  <p className="text-gray-500 ml-2 text-xs">|</p>
                  <p className="text-gray-500 ml-2 text-xs">
                    {review.reviewDate}
                  </p>
                </div>

                <div className="flex">
                  <Image
                    src="/images/like-review.png"
                    width={23}
                    height={23}
                    alt="like"
                    className="w-[16px] h-16px]"
                  ></Image>

                  <p className="text-xs ml-1">{0}</p>
                </div>
              </li>

              <li className=" mt-3">
                {Option && (
                  <span className="text-xs text-gray-400">{`구매옵션 ${Option[0].volume}`}</span>
                )}
              </li>

              {/* 리뷰 내용 */}
              <li className="mt-3 h-[60px]">
                <p className="flex text-sm">{review.reviewContent}</p>
              </li>

              {/* 리뷰 이미지 */}
              <li className="">
                <div className="flex flex-wrap gap-2">
                  {images[index] && ( // 리뷰 인덱스에 맞는 이미지를 1개씩 출력
                    <Image
                      key={index}
                      src={images[index].reviewImageUrl}
                      width={198}
                      height={198}
                      alt="Review Image"
                      className="w-[172px] h-[172px]"
                    />
                  )}
                </div>
              </li>

              <div className="border border-gray-200 mt-14"></div>
              <div className="py-2"></div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">리뷰가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default DetailAllReviewModal;
