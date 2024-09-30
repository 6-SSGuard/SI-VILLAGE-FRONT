//리뷰 조회
export interface reviewSelectResponse {
  message: string;
  code: number;
  data: {
    data: reviewListDataType[];
  };
}

export interface reviewListDataType {
  reviewId: number;
  writer: string;
  content: string;
  image: string;
  score: number;
  create_at: number;
  like: number;
}

//리뷰 삭제
export interface reviewDeleteResponse {
  message: string;
  code: number;
}

export interface reviewRegistResponse {
  message: string;
  code: number;
}

export interface reviewUpdateResponse {
  message: string;
  code: number;
}

//리뷰 삭제
export interface reviewDeleteResponse {
  message: string;
  code: number;
}
export interface reviewRegistResponse {
  message: string;
  code: number;
}

export interface reviewUpdateResponse {
  message: string;
  code: number;
}

//리뷰 등록
export interface reviewRegistRequest {
  email: string;
  content: string;
  image: string;
  score: number;
}

//리뷰 수정
export interface reviewUpdateRequest {
  email: string;
  content: string;
  image: string;
  score: number;
}

//상품의 리뷰 id 조회
export interface reviewIdDataType {
  id: number;
}

//상품의 리뷰 목록 조회
export interface productReviewListType {
  score: number;
  reviewContent: string;
  authorEmail: string;
  memberInfomation: string;
  reviewDate: string;
}

// 리뷰 id 조회 response
export interface getReviewIdResponse {
  httpStatus: {
    error: boolean;
    is4xxClientError: boolean;
    is5xxServerError: boolean;
    is1xxInformational: boolean;
    is2xxSuccessful: boolean;
    is3xxRedirection: boolean;
  };
  isSuccess: boolean;
  message: string;
  result: [];
}

export interface getReviewImage {
  reviewImageId: number;
  reviewImageUrl: string;
}

export interface getReviewLikeCount {
  reviewLikeCount: number;
}
