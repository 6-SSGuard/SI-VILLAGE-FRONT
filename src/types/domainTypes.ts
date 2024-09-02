export interface dealListDataType {
  page: number;
  data: dealCardDataType[];
}

export interface dealCardDataType {
  id: number;
  dealImageUrl: string;
  brandName: string;
  brandTitle: string;
  discountPrice: string;
  discountRate: string;
  badgeList: string[];
}
