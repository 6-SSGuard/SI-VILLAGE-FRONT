'use server';
import { authResponse, commonResType } from '@/types/auth/authType';
import {
  breifProductReq,
  detailInforeq,
} from '@/types/detail/detailproductinfo';
import { detailthumnailImagereq } from '@/types/detail/detailproductinfo';
import { detailImageListReq } from '@/types/detail/detailproductinfo';

//디테일 정보 조회
export const getProductCodeByDetailInfo = async (
  productCode: string
): Promise<detailInforeq> => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/details/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { tags: ['getProduct'] },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<detailInforeq>;

  return data.result;
};

//썸네일 이미지 조회
export const getProductCodeBythumnailImage = async (
  productCode: string
): Promise<detailthumnailImagereq> => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/image/brief/thumbnail/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<detailthumnailImagereq>;

  return data.result;
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
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<detailImageListReq[]>;
  console.log(data, 'api');
  return data.result;
};

// 단일 상품에 대한 간략 정보 조회
export const getProductCode = async (
  productCode: string
): Promise<breifProductReq> => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/brief/${productCode}`,
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

  const data = (await res.json()) as commonResType<breifProductReq>;

  return data.result;
};
