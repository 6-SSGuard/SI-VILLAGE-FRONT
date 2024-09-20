'use server';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

/**
 * 사이즈 정보 조회
 * @remarks
 * GET 요청을 '/api/size-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 을 반환합니다.
 */
// export async function getTopCategories(): Promise<> {
//   return fetchData<>(`${process.env.API_BASE_URL}/api/size-info`);
// }

export async function getSizeInfo() {
  const session = await getServerSession(options);

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/size-info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch size info:', error);
    return null;
  }
}

/**
 * 뷰티 정보 등록
 * @remarks
 * POST 요청을 '/api/size-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
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
// export async function postSizeInfo(
//   sizeFormData:
// ) {
//   const session = await getServerSession(options);
//   const res = await fetch(`${process.env.API_BASE_URL}/api/size-info`, {
//     method: 'POST',
//     body: JSON.stringify(sizeFormData),
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${session?.user.accessToken}`,
//     },
//   });

//   if (res.ok) {
//     return await res.json();
//   }
//   return null;
// }

/**
 * 뷰티 정보 수정
 * @remarks
 * PUT 요청을 '/api/size-info' 엔드포인트에 보냅니다. 성공시 메시지와 result를 반환합니다.
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
// export async function putSizeInfo(payload: ) {
//   const session = await getServerSession(options);
//   const res = await fetch(`${process.env.API_BASE_URL}/api/size-info`, {
//     method: 'PUT',
//     body: JSON.stringify(payload),
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${session?.user.accessToken}`,
//     },
//   });

//   if (res.ok) {
//     return await res.json();
//   }
//   return null;
// }

// export async function deleteSizeInfo() {
//   const session = await getServerSession(options);
//   const res = await fetch(`${process.env.API_BASE_URL}/api/size-info`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${session?.user.accessToken}`,
//     },
//   });

//   if (res.ok) {
//     return await res.json();
//   }
//   return null;
// }
