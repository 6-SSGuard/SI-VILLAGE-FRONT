export interface brandListDataType {
  data: brandResponse[];
}

export interface brandResponse {
  brandId: number;
  brandEngName: string;
  brandKorName: string;
  liked: boolean;
}
