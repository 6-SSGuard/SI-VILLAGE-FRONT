//상품검색
export interface searchProductResponse {

    message: string,
    code: number,
    data: searchDataType[]
}

export interface searchDataType {
    name: string,
    price: number,
    discount_rate: number,
    shippingfee: number,
    purchase_limit: number,
    isLike: boolean,
    point: number,
    brand: string,
    contentImage: string
}



