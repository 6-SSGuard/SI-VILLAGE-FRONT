//기간특가 상품 조회
export interface eventListResponse {
  message: string;
  code: number;
  data: {
    data: eventListDataType[];
  };
}

//productA랑 B가 요소가 서로 다른데 어떻게 해야하나요...
export interface eventListDataType {
  name: string;
  price: number;
  rate: number;
  brand: string;
  content_image: string;

  nameB: string;
  priceB: number;
  stockB: number;
  shipping_fee: number;
  isLiked: boolean;
  purchase_limit: number;
  content_imageB: string;
}
