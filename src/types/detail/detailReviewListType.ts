export interface DetailReviewListType {
  allCount: number;
  data: DetailReviewDataType[];
}

export interface DetailReviewDataType {
  id: number;
  type: string;
  nickname: string;
  reviewNumber: number;
  reviewStar: string;
  date: string;
  location: string;
  size: string;
  color: string;
  content: string;
  count: number;
  photoImageList: string[];
}
