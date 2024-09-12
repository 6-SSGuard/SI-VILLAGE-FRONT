//베스트 상품 조회(인기)
export interface bestProduceSelectResponse {
  message: string;
  code: number;
  data: {
    categoryName: categoryNameDataType[];
    products: bestProductDataType[];
  };
}

export interface categoryNameDataType {
  categoryName: string;
}

export interface bestProductDataType {
  name: string;
  price: number;
  stock: number;
  shipping_fee: number;
  isLiked: boolean;
  purchase_limit: number;
  content_image: string;
}

//베스트 상품 조회(많이)
export interface bestProduceSeleManyResponse {
  message: string;
  code: number;
  data: {
    current_page: number;
    page_size: number;
    total_pages: number;
    total_Products: number;
    data: bestProduceSeleManyDataType[];
  };
}

export interface bestProduceSeleManyDataType {
  name: string;
  price: number;
  stock: number;
  shipping_fee: number;
  isLiked: boolean;
  purchase_limit: number;
  content_image: string;
}

//임시로 만든 더미 데이터 타입
export interface bestCreateListDataType {
  data: bestCreateDataType[];
}

export interface bestCreateDataType {
  id: number;
  ProductNumber: string;
  isLike: boolean;
  ProductImage: string;
  Product_Title: string;
  Product_Content: string;
  Product_DiscountRate: number;
  Product_price: number;
  category: string;
}
