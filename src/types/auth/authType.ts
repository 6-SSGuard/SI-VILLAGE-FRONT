//성공 Response
export interface authResponse {
  httpStatus: HttpStatus;
  isSuccess: boolean;
  message: string;
  result: any;
}

interface HttpStatus {
  error: boolean;
  is4xxClientError: boolean;
  is5xxServerError: boolean;
  is1xxInformational: boolean;
  is2xxSuccessful: boolean;
  is3xxRedirection: boolean;
}

//회원가입 Type
export interface signUpDataRequest {
  email: string;
  password: string;
  name: string;
  role: string;
  // phone: string;
  // birthday: string;
  // permission: string;
}

//로그인 Type
export interface signInDataRequest {
  email: string;
  password: string;
}

//비밀번호 인증 Type
export interface passAuthDataRequest {
  password: string;
}

//토큰 재발급 Type
export interface refreshDataRequest {
  refreshToken: string;
}

//회원 탈퇴 Type
export interface withdrawDataRequest {
  option: string;
  reason: string;
}

export interface commonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  result: T;
}
