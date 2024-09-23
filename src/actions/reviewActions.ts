'use server';
import { DetailProductInfoData } from './../types/detail/detailproductinfo';
export const reviewListByProductId = async (
  productCode: number
): Promise<DetailProductInfoData> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/reviews/${productCode}/product`
  );
  const data = await res.json();
  return data;
};
