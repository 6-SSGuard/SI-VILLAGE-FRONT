//주문하기
export interface orderProductRequest {
    product_name: string,
    price: number,
    amount: number,
    brand: string,
    discountRate: number,
    shippingfee: number,
    earnPoint: number,
    usePoint: number,
    receiverName: number,
    receiveremail: number,
    receiverphone: number,
    receiveraddress: number,
}

export interface orderProductResponse {
    message: string,
    code: number,
    data: orderProductDataType[]
}

export interface orderProductDataType {
    purchaseNumber: string,
    receiverName: string,
    receiverPhone: string,
    receiveraddress: string,
    name: string,
    amount: number,
    totalPrice: number,
    point: number
}

//주문 상품 목록 열람
export interface orderProductOpenResponse {
    message: string,
    code: number,
    data: orderProductOpenDataType[]
}

export interface orderProductOpenDataType {
    name: string,
    price: number,
    amount: number,
    image: string,
    brand: string
}

//주문 상품 상세 정보 열람
export interface orderProductDetailOpenResponse {
    message: string,
    code: number,
    data: {
        productInfo:productInfoDataType[],
        shipmentInfo:shipmentInfoDataType[],
        chargeInfo: chargeInfoDataType[],
        purchasedMemberInfo: purchasedMemberInfoDataType[]
    }
}

export interface productInfoDataType {
    purcnamehaseNumber: string,
    name: number,
    price: number,
    amount: string,
    image: string,
    brand: string
}

export interface shipmentInfoDataType {
    receiver: string,
    receiverLocation: number,
    receiverPhone: number,
    receiverAddress: string,

}

export interface chargeInfoDataType {
    name: string,
    price: number,
    amount: number,
    image: string,
    brand: string
}

export interface purchasedMemberInfoDataType {
    name: string,
    price: number,
    amount: number,
    image: string,
    brand: string
}