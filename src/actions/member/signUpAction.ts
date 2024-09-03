'use server';

import { signUpDataRequest, authResponse } from '@/types/auth/authType';
/**
 * 회원가입
 * @remarks
 * POST 요청을 '/api/member/signup' 엔드포인트에 보냅니다. 성공시 메시지와 헤더를 반환합니다.
 * @returns {Promise<authResponse>} "Success." 메시지와 함께 accessToken, refreshToken을 반환합니다.
 * @throws 400 "잘못된 요청" 또는 409 "이메일 중복" 오류를 반환할 수 있습니다.
 */
export async function signUpAction(signUpFormData: FormData) {
  const payload: signUpDataRequest = {
    email: signUpFormData.get('email') as string,
    password: signUpFormData.get('password') as string,
    name: signUpFormData.get('name') as string,
    phone: signUpFormData.get('phoneNumber') as string,
    birthday: signUpFormData.get('birth') as string,
    permission: signUpFormData.get('birth') as string,
  };

  console.log('action payload', payload);
  const res = await fetch(`${process.env.API_BASE_URL}/api/member/signup`, {
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
