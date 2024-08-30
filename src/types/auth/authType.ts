//회원가입 Type
export interface signUpDataRequest {
    email: string,
    password: string,
    name: string,
    phone: string,
    birthday: string,
    permission: string
}

//로그인 Type
export interface signInDataRequest {
    email: string,
    password: string
}

//비밀번호 인증 Type
export interface passAuthDataRequest {

    password : string
}

//토큰 재발급 Type
export interface refreshDataRequest {

    refreshToken : string
}

//회원 탈퇴 Type
export interface withdrawDataRequest {
    option: string,
    reason: string
}




