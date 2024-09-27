'use server';
import { ProductPolicyRequest } from '@/types/product/productsType';
import { authResponse } from '@/types/auth/authType';
import { getServerSession } from 'next-auth/next';
// import { options } from '@/app/api/auth/[...nextauth]/options';
import { likeToggle } from '@/types/detail/detailproductinfo';
import { ColorReq } from '@/types/detail/detailproductinfo';

/**
 * 물품 생성
 * @remarks
 * POST 요청을 '/api/product/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {productRequest}
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export async function getProductDetail() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/product/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

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

  const data = (await res.json()) as authResponse;

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

    const data = (await res.json()) as authResponse;

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

  const data = (await res.json()) as authResponse;

  return data.result as ColorReq;
};
/**
 * 특정 물품의 2차 카테고리 이름 반환
 * @remarks
 * GET 요청을 '/api/product/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {productRequest}
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

// export async function getTopCategories(productUuid: string) {
//   const res = await fetch(
//     `${process.env.API_BASE_URL}/api/product/${productUuid}/top-category-name`
//   );
//   if (!res.ok) {
//     throw new Error('Failed to fetch');
//   }

//   const data = await res.json();
//   // console.log(data);
//   return data.data;
// }
