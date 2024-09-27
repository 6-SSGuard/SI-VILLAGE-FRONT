//Request Lst

//사이즈 등록 Request
export interface sizeCreateDataRequest {
  height: number;
  weight: number;
  topSize: string;
  bottomSize: string;
  shoeSize: string;
}

//개인 정보 수정 Request
export interface infoModifyDataRequest {
  phone: string;
  address: string;
}

//개인정보 조회 Request
export interface infoDataSelectRequest {
  password: string;
}

//뷰티정보 등록
export interface beautyInfoCreateDataRequest {
  skinType?: string;
  skinTone?: string;
  scalpTone?: string;
  beautyKeyword?: string[];
}

//비밀번호 번경
export interface passwordChangeRequest {
  password: string;
}

//Response List

//찜목록
export interface wishListDataResponse {
  data: wishDataReponse[];
}

export interface wishDataReponse {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
}

//제품 클래스
export interface ProductDataType {
  name: string;
  price: number;
  stock: number;
  shipping_fee: number;
  isLike: boolean;
  purchase_limit: number;
  content_image: string;
}
//찜목록 조회
export interface wishListDataSelecotResponse {
  data: ProductDataType[];
}

//사이즈 등록
export interface sizeRegistResponse {
  message: string;
}

//개인정보 수정

export interface sizeRegistResponse {
  message: string;
}

//개인정보 조회
export interface infoDataSelectResponse {
  email: string;
  name: string;
  phone: string;
  birth: string;
}

//뷰티 정보 등록
export interface beautyInfoRegistDataResponse {
  code: number;
  message: string;
}

//비밀번호 번경
export interface passwordChangeResponse {
  message: string;
}

// 배송지 정보
export interface shippingAddressResponse {
  shippingAddressId: number;
  addressName: string;
  recipient: string;
  phone: string;
  address: string;
  detailedAddress: string;
  postalCode: string;
  defaultAddress: boolean;
}

// 배송지 요청정보
export interface shippingAddressRequest {
  addressName: string;
  recipient: string;
  phone: string;
  address: string;
  detailedAddress: string;
  postalCode: string;
  defaultAddress: boolean;
}
