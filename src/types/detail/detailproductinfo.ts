export interface DetailProductList {
  allCount: number;
  data: DetailProductInfoData[];
}

export interface DetailProductInfoData {
  product_code: string;
  productTitle: string;
  productContent: string;
  productdiscountRate: string;
  productPrice: number;
  productImageList: string[];
  productCurrentColor: string;
  productColorImageList: string[];
  productReviewCount: number;
  productislike: number;
  productImage: string;
}

//좋아요 토글
export interface likeToggle {
  liked: boolean;
}
//디테일 정보 Response
export interface detailInforeq {
  productCode: string;
  productName: string;
  price: number;
  brandEngName: string;
  colorId: number;
  detailContent: string;
}

//디테일 썸네일 Response
export interface detailthumnailImagereq {
  thumbnailUrl: string;
}

//디테일 이미지 리스트 Response
export interface detailImageListReq {
  imageUrl: string;
}

//색상 조회
export interface ColorReq {
  colorId: number;
  colorName: string;
  colorCode: string;
}

export interface breifProductReq {
  productCode: string;
  brandEngName: string;
  productName: string;
  price: number;
}

//상품 옵션 조회
export interface detailProductOpion {
  productOptionId: number;
  sizeId: number;
  volume: string;
  stokc: number;
}
