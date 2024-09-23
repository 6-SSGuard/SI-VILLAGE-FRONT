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
