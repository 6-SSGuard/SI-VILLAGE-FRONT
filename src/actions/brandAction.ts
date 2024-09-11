'use server';

import { authResponse } from '@/types/auth/authType';

interface brandRequest {
  brandEngName: string;
  brandKorName: string;
}

/**
 * 브랜드 등록
 * @remarks
 * POST 요청을 '/api/beauty-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>}
 */
export async function postBrand(payload: brandRequest) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/brand`, {
    method: 'POST',
    body: JSON.stringify(payload),
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
