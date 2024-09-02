//핫 딜 페이지 조회
export interface hotdealOrderResponse {
  message: string;
  code: number;
  data: hotdealOrderDataType[];
}

export interface hotdealOrderDataType {
  name: string;
  price: number;
  discountRate: number;
  content_Image: string;
  experiment_time: string;
}

//product_list : [1,2,3] 되어있는데 이게 맞나요???
//핫딜 물품 지정
export interface hotdealProductdesignRequest {
  productList: hotdealDataType[];
}

export interface hotdealDataType {
  number: number;
}
