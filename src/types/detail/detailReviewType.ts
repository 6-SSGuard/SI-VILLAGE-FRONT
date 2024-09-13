export interface DetailReviewInfoListType {
  count: number;
  data: DetailReviewInfoDataType[];
}

export interface DetailReviewInfoDataType {
  id: number;
  image: string;
  nickname: string;
  likeNumber: number;
  reviewStar: string;
  date: string;
  location: string;
  size: string;
  color: string;
  content: string;
  type: string;
  photoImageList: string[];
}
