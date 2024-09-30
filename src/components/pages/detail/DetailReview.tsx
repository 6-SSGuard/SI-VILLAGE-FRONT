'use client';
import React, { useState, useEffect } from 'react';
import { StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  productReviewListType,
  reviewIdDataType,
} from '@/types/review/reviewType';
import {
  reviewIdbyReviewList,
  reviewIdbyReviewImage,
} from '@/actions/reviewActions';
import { getReviewImage } from '@/types/review/reviewType';
import Image from 'next/image';
import SiButton from '@/components/icons/common/SiButton';

// 리뷰 ID 타입을 number로 수정
function DetailReview({
  id,
  productname,
}: {
  id: reviewIdDataType[];
  productname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<productReviewListType[]>([]);
  const [images, setImages] = useState<getReviewImage[]>([]); // 이미지 배열

  const handleEvent = () => {
    setIsOpen(!isOpen);
  };

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
          className="w-[18px] h-[18px]"
          style={{ fill: '#FF8C00', stroke: '#FF8C00' }}
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <div
          key="half"
          className="relative w-[18px] h-[18px]"
          style={{ width: '18px', height: '18px' }}
        >
          <StarIcon
            className="absolute w-[18px] h-[18px]"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
              fill: '#FF8C00',
              stroke: '#FF8C00',
            }}
          />
          <StarIcon
            className="absolute text-gray-300 w-[18px] h-[18px]"
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
          className="w-[18px] h-[18px] text-gray-300"
          style={{ fill: 'transparent', stroke: '#FF8C00' }}
        />
      );
    }
    return stars;
  }

  function maskText(text: string, visibleLength: number) {
    if (text.length <= visibleLength) {
      return text;
    }
    const visiblePart = text.slice(0, visibleLength);
    const maskedPart = '*'.repeat(text.length - visibleLength);
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

    fetchReviewImage();
    fetchReviewData();
  }, [id]);

  return (
    <div className="">
      <ul className="flex-col overflow-hidden text-wrap px-8">
        <li>
          <div className="flex justify-between mt-6">
            <p className="text-base font-bold">리뷰</p>

            <p className="text-sm  underline text-gray-400">리뷰 혜택보기</p>
          </div>
        </li>
        {items.length > 0 ? (
          items.slice(0, 3).map((review, index) => (
            <div className="flex-col mt-10" key={index}>
              {/* 별점 */}
              <li className="flex gap-2">{renderStars(review.score)}</li>

              {/* 닉네임, 날짜 */}
              <li className="flex mt-2">
                <div className="flex">
                  <p className="text-xs text-gray-500">
                    {maskText(review.authorEmail, 4)}
                  </p>
                  <p className="text-gray-500 ml-2 text-xs">|</p>
                  <p className="text-gray-500 ml-2 text-xs">
                    {review.reviewDate}
                  </p>
                </div>
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
                      className="w-[198px] h-[198px]"
                    />
                  )}
                </div>
              </li>

              <div className="border border-gray-200 mt-6"></div>
              <div className="py-2"></div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">리뷰가 없습니다.</p>
        )}
      </ul>
      {/* 리뷰 전체 보기 버튼 */}
      <div className="px-2 py-4">
        <SiButton
          className="text-sm border border-gray-200 w-full h-full"
          href={{
            pathname: `/product/${productname}/reviewform`,
            query: { productname: productname },
          }}
          buttonTitle="리뷰 상세보기"
        ></SiButton>
      </div>
    </div>
  );
}

export default DetailReview;
