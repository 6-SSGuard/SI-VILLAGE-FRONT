'use server';

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

/**
 * 특정 물품의 2차 카테고리 이름 반환
 * @remarks
 * GET 요청을 '/api/product/' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param {productRequest}
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 *  */

export async function getTopCategories(productUuid: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/product/${productUuid}/top-category-name`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await res.json();
  // console.log(data);
  return data.data;
}
