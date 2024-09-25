// 'use server';

// import { DetailProductImageDataType } from '@/types/detail/detailProductImageList';
// export const getProductCodeImage = async (
//   product_code: string
// ): Promise<DetailProductImageDataType> => {
//   'use server';

//   // URL 수정: process.env.API_BASE_URL와 실제 URL을 분리
//   const res = await fetch(
//     `${process.env.API_BASE_URL}/json_data/product_deail.json?product_code=${product_code}`
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch product data');
//   }

//   const data: DetailProductImageDataType = await res.json();

//   console.log(data); // 데이터를 제대로 가져오는지 확인
//   return data;
// };
