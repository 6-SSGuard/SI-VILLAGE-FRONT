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
