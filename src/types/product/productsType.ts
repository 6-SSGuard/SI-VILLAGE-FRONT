//특정 카테고리 상품 리스트 조회
export interface categoryProductSelectRequest {
  categoryName: string;
  sorBy: string;
  minPrice: number;
  maxPrice: number;
}

export interface categoryProductSelectResponse {
  message: string;
  code: number;
  data: productsListDataType[];
}

export interface productsListDataType {
  name: string;
  price: number;
  stock: number;
  shipping_fee: number;
  isLiked: boolean;
  purchase_limit: number;
  content_image: string;
}

//상품 상세 페이지 request, response
export interface detailPageResponse {
  message: string;
  code: number;
  point_rate: number;
  shipping_fee: number;
  data: {
    thumbnail: detail_thumbnailDataType[];
    product: detail_productDataType[];
    product_image: detail_productImageDataType[];
  };
}
export interface detail_thumbnailDataType {
  image: string;
}

export interface ProductType {
  id: string;
}

export interface cursorDataType {
  content: ProductType[];
  nextCursor: string;
  hasNext: boolean;
  pageSize: number;
  page: number;
}

export interface detail_productDataType {
  name: string;
  price: number;
  stock: number;
  isLike: boolean;
  brand: string;
  discount: number;
  shipping_fee: number;
  purchase_limit: number;
  content_image: string;
}

export interface detail_productImageDataType {
  image: string;
}

//장바구니 페이지 Response
export interface shippingCartProductResponse {
  message: string;
  code: number;
  data: shippingDataType[];
}

export interface shippingDataType {
  name: string;
  price: number;
  discount_rate: number;
  shippingfee: number;
  purchase_limit: number;
  isLike: boolean;
  point: number;
  brand: string;
  contentImage: string;
}

export interface productRequest {
  productName: string;
  price: number;
  stock: number;
  color: string;
  capacity: string;
  size: string;
  brandEngName: string;
  detailContent: string;
  productImageUrls: string[];
  categoryCode: string;
}

export interface ProductPolicyRequest {
  productByVendorId: number;
  productCode: string;
  productName: null;
  vendorName: string;
  mainView: boolean;
  newProduct: boolean;
  display: boolean;
  maxOrderCount: number;
  minOrderCount: number;
  discountRate: number;
}
export interface pageType {
  page: number;
  size: number;
  sort: SortType[];
}

// Sort 관련 타입
export interface SortType {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

// Pageable 관련 타입
export interface PageableType {
  pageNumber: number;
  pageSize: number;
  sort: SortType;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

// 서버에서 받아온 데이터를 표현하는 타입
export interface ContentData {
  id: string;
}

// CursorDataType 수정
export interface CursorDataType {
  content: ContentData[]; // string[] 대신 ContentData[]
  nextCursor: string | null; // nextCursor를 lastProductCode로 처리
  hasNext: boolean;
  pageSize: number;
  page: number;
}
