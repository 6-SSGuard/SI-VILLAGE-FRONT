import { authResponse } from '@/types/auth/authType';
import { detailInforeq } from '@/types/detail/detailproductinfo';
import { detailthumnailImagereq } from '@/types/detail/detailproductinfo';
import { detailImageListReq } from '@/types/detail/detailproductinfo';

// export const fetchDataRevaliDateTime = async <T>(
//   url: string,
//   revalidateTime: number
// ): Promise<T> => {
//   const res = await fetch(url, {
//     method: 'GET',
//     next: { revalidate: 3600 * revalidateTime }, // 캐싱 설정
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch data from ${url}`);
//   }

//   const data = (await res.json()) as DetailProductImageDataType;
//   return console.log('api 불러오기에 성공 했습니다');
// };

//디테일 정보 조회
export const getProductCodeByDetailInfo = async (
  productCode: string
): Promise<detailInforeq> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/details/${productCode}`,
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

  const data = (await res.json()) as authResponse;

  return data.result as detailInforeq;
};

//썸네일 이미지 조회
export const getProductCodeBythumnailImage = async (
  productCode: string
): Promise<detailthumnailImagereq> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/image/brief/thumbnail/${productCode}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${productCode}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as authResponse;

  return data.result as detailthumnailImagereq;
};

//이미지 리스트 조회
export const getProductCodeByImageList = async (
  productCode: string
): Promise<detailImageListReq[]> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/image/details/images/${productCode}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${productCode}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as authResponse;
  return data.result as detailImageListReq[];
};
