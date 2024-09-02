//포인트 조회
export interface pointListResponse {
    message: string,
    code: number,
    data : pointDataType[]
}

export interface pointDataType{
    point : number
}
