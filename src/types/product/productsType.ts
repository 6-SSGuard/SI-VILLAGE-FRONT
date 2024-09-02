//특정 카테고리 상품 리스트 조회
export interface categoryProductSelectRequest{
    categoryName: string,
    sorBy: string,
    minPrice: number,
    maxPrice: number

}

export interface categoryProductSelectResponse{
    message: string,
    code: number,
    data : productsListDataType[]
}

export interface productsListDataType {
    name: string,
    price: number,
    stock: number,
    shipping_fee: number,
    isLiked: boolean,
    purchase_limit: number,
    content_image: string
}

//상품 상세 페이지 request, response
export interface detailPageResponse {
    message: string,
    code: number,
    point_rate: number,
    shipping_fee: number,
    data: {
        thumbnail: detail_thumbnailDataType[],
        product: detail_productDataType[],
        product_image: detail_productImageDataType[]
    }
        }
export interface detail_thumbnailDataType {
    image: string
}

export interface detail_productDataType {
    name: string,
    price: number,
    stock: number,
    isLike: boolean,
    brand: string,
    discount: number,
    shipping_fee: number,
    purchase_limit: number,
    content_image: string,
}

export interface detail_productImageDataType {
    image : string
}

//장바구니 페이지 Response
export interface shippingCartProductResponse {

    message: string,
    code: number,
    data: shippingDataType[]
}

export interface shippingDataType {
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