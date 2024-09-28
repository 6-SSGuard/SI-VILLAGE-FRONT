'use server';
import { authResponse, commonResType } from '@/types/auth/authType';
import { ReviewResponse } from '@/types/auth/authType';
import { productReviewListType } from '@/types/review/reviewType';
import { reviewIdDataType } from '@/types/review/reviewType';
import { getReviewImage } from '@/types/review/reviewType';

//상품의 리뷰 id 조회 api
export const reviewListByProductId = async (
  productCode: string
): Promise<reviewIdDataType[]> => {
  ('use server');

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/review/product/${productCode}`,
    {
      method: 'GET',
      headers: {},
    }
  );
  const data = await res.json();

  const idList = data.result;
  return idList;
};

//리뷰 조회
export const reviewIdbyReviewList = async (
  reviewId: number
): Promise<productReviewListType[]> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/review/${reviewId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  // Check if the response is OK
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const reviewListData = (await res.json()) as ReviewResponse;

  return reviewListData.result as productReviewListType[];
};

//리뷰 이미지 조회
export const reviewIdbyReviewImage = async (
  reviewId: number
): Promise<getReviewImage> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/review/${reviewId}/images`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const reviewListData =
    (await res.json()) as commonResType<productReviewListType>;

  const reviewListData = (await res.json()) as commonResType<getReviewImage>;

  return reviewListData.result as getReviewImage;
};
