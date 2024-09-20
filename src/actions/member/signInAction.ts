'use server';

import { signInDataRequest, authResponse } from '@/types/auth/authType';

/**
 * 로그인
 * @remarks
 * POST 요청을 '/api/member/login' 엔드포인트에 보냅니다. 성공시 메시지와 헤더를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 accessToken, refreshToken을 반환합니다.
 * @throws 401 "인증실패" 또는 404 "사용자 없음" 오류를 반환할 수 있습니다.
 */
export async function signInAction(signInFormData: FormData) {
  const payload: signInDataRequest = {
    email: signInFormData.get('email') as string,
    password: signInFormData.get('password') as string,
  };

  console.log('action payload', payload);
  const res = await fetch(`${process.env.API_BASE_URL}/api/auth/sign-in`, {
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

/**
 * 로그아웃
 * @remarks
 * POST 요청을 '/api/member/logout' 엔드포인트에 보냅니다. 성공시 메시지와 헤더를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 accessToken, refreshToken을 반환합니다.
 * @throws 401 "인증실패" 오류를 반환할 수 있습니다.
 */
export async function logoutAction() {
  console.log('action payload');
  const res = await fetch(`${process.env.API_BASE_URL}/auth/logout`, {
    method: 'POST',
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
 * 리프레쉬 토큰
 * @remarks
 * POST 요청을 '/api/v1/auth/refresh-token' 엔드포인트에 보냅니다. 성공시 메시지와 헤더를 반환합니다.
 * @param {string} refreshToken 리프레쉬 토큰 값
 * @returns {Promise<ApiResponse>} "Success." 메시지와 함께 accessToken, refreshToken을 반환합니다.
 * @throws 403 "Expired Refresh Token" 오류를 반환할 수 있습니다.
 */
// export const refreshToken = async (
//   refreshToken: string,
// ): Promise<ApiResponse> => {
//   try {
//     const response = await apiClient.post<ApiResponse>(
//       '/api/v1/auth/refresh-token',
//       {
//         refreshToken,
//       },
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError(error) && error.response) {
//       throw error.response.data;
//     }
//     throw error;
//   }
// };
