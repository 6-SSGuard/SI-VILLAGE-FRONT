export interface DetailPhotoReviewListType {
  data: DetailPhotoReviewDataType[];
}

export interface DetailPhotoReviewDataType {
  id: number;
  image: string;
  nickname: string;
  reviewNumber: number;
  reviewStar: string;
  date: string;
  location: string;
  size: string;
  color: string;
  content: string;
}
