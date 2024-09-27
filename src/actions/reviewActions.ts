'use server';
import { commonResType } from '@/types/auth/authType';
import { productReviewListType } from '@/types/review/reviewType';
import { reviewIdDataType } from '@/types/review/reviewType';
//상품의 리뷰 id 조회 api

export const reviewListByProductId = async (
  productCode: string
): Promise<reviewIdDataType[]> => {
  ('use server');

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/review/product/${productCode}`
  );
  const data = await res.json();

  const idList = data.result;
  return idList;
};

export const reviewIdbyReviewList = async (
  reviewId: number
): Promise<productReviewListType> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/review/${reviewId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${reviewId}`,
      },
    }
  );

  // Check if the response is OK
  if (!res.ok) {
    throw new Error(`Failed to fetch review data: ${res.status}`);
  }

  const reviewListData =
    (await res.json()) as commonResType<productReviewListType>;

  console.log(reviewListData);

  return reviewListData.result as productReviewListType;
};
