'use server';
import { ProductPolicyRequest } from '@/types/product/productsType';
import { authResponse, commonResType } from '@/types/auth/authType';
import { getServerSession } from 'next-auth/next';
import { likeToggle } from '@/types/detail/detailproductinfo';
import { ColorReq } from '@/types/detail/detailproductinfo';
import { fetchDataNoCache } from '@/components/hooks/fetchDataHook';
import { cursorDataType, pageType } from '@/types/product/productsType';
import { detailProductOpion } from '@/types/detail/detailproductinfo';
// import { options } from '@/app/api/auth/[...nextauth]/options';
/**
 * 물품 생성
 * @remarks
 * POST 요청을 '/api/product/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {productRequest}
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export const getProductListByCategory = async (
  topCategoryCode?: string | null,
  middleCategoryCode?: string | null,
  bottomCategoryCode?: string | null,
  subCategoryCode?: string | null,
  lastValue?: string | null,
  pageSize?: number | null,
  sort?: string | null
): Promise<cursorDataType> => {
  'use server';

  const params = new URLSearchParams();

  // 파라미터가 존재할 경우에만 추가
  if (topCategoryCode)
    params.append('topCategoryCode', decodeURIComponent(topCategoryCode));
  if (middleCategoryCode)
    params.append('middleCategoryCode', decodeURIComponent(middleCategoryCode));
  if (bottomCategoryCode)
    params.append('bottomCategoryCode', decodeURIComponent(bottomCategoryCode));
  if (subCategoryCode)
    params.append('subCategoryCode', decodeURIComponent(subCategoryCode));
  if (lastValue) params.append('lastValue', String(lastValue));
  if (pageSize) params.append('pageSize', String(pageSize));
  if (sort) {
    params.append('sort', String(sort));
  }

  const fetchUrl = `${process.env.API_BASE_URL}/api/product-category-list?${params.toString()}`;

  console.log('fetchUrl', fetchUrl);
  return fetchDataNoCache<cursorDataType>(fetchUrl);
};

//상품정책 조회
export const getProductCodeByProductPolicy = async (
  productCode: string
): Promise<ProductPolicyRequest> => {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/policy/${productCode}`,
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

  const data = (await res.json()) as commonResType<ProductPolicyRequest>;

  return data.result as ProductPolicyRequest;
};

//상품의 좋아요 토글
export const ProductByProductLikeToggle = async (productCode: string) => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/product-like/member/${productCode}`,
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

    const data = (await res.json()) as commonResType<likeToggle>;

    return data.result as likeToggle;
  } catch (error) {
    console.error('Error toggle detail like toggle', error);
  }
};

//색상조회
export const ColorIdByColor = async (id: number): Promise<ColorReq> => {
  'use server';
  const res = await fetch(`${process.env.API_BASE_URL}/api/color/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<ColorReq>;

  return data.result as ColorReq;
};

//상품 옵션 조회
export const getProductCodeByOpion = async (
  productCode: string
): Promise<detailProductOpion> => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/option/details/${productCode}`,
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

  const data = (await res.json()) as commonResType<detailProductOpion>;

  return data.result as detailProductOpion;
};
