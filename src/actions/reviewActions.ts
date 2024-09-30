'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { authResponse, commonResType } from '@/types/auth/authType';
import { ReviewResponse } from '@/types/auth/authType';
import { productReviewListType } from '@/types/review/reviewType';
import { reviewIdDataType } from '@/types/review/reviewType';
import { getReviewImage } from '@/types/review/reviewType';
import { getReviewLikeCount } from '@/types/review/reviewType';
import { getServerSession } from 'next-auth';
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

//리뷰 좋아요 조회

export const reviewIdbyLikeCount = async (
  reviewId: number
): Promise<getReviewLikeCount> => {
  'use server';

  try {
    const session = await getServerSession(options);
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/review-like/member/${reviewId}/like`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Like count를 받아오지 못했습니다');
    }

    const data = (await response.json()) as commonResType<getReviewLikeCount>;
    return data.result as getReviewLikeCount;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};
