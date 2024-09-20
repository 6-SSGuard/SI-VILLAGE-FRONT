'use server';

import { authResponse } from '@/types/auth/authType';
import { beautyInfoCreateDataRequest } from '@/types/mypage/mypageType';

/**
 * 뷰티 정보 조회
 * @remarks
 * GET 요청을 '/api/beauty-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 */
export async function getBeautyInfo(token: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/beauty-info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    console.log(res.json());

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch beauty info:', error);
    return null;
  }
}

/**
 * 뷰티 정보 등록
 * @remarks
 * POST 요청을 '/api/beauty-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param params 유저ID 필요없나 ??
 * @returns {Promise<authResponse>}
  "result": {
    "skinType": "건성",
    "skinTone": "쿨톤",
    "scalpTone": "건성",
    "beautyKeyword": [
      "주름"
    ]
  }
 */
export async function postBeautyInfo(payload: beautyInfoCreateDataRequest) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/beauty-info`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token,
    },
  });

  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  return null;
}

/**
 * 뷰티 정보 수정
 * @remarks
 * PUT 요청을 '/api/beauty-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @param params 
 * @returns {Promise<authResponse>}
  "result": {
    "skinType": "건성",
    "skinTone": "쿨톤",
    "scalpTone": "건성",
    "beautyKeyword": [
      "주름"
    ]
  }
 */
export async function putBeautyInfo(payload: beautyInfoCreateDataRequest) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/beauty-info`, {
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
