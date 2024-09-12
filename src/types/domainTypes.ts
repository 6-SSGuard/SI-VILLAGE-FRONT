export interface dealListDataType {
  page: number;
  data: dealCardDataType[];
}

export interface dealCardDataType {
  id: number;
  dealImageUrl: string;
  brandName: string;
  brandTitle: string;
  discountPrice: number;
  discountRate: number;
  badgeList: string[];
}
