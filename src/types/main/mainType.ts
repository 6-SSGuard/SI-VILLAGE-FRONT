//이미지 케러셀 이미지 조회
export interface imageCarouselResponse {
  message: string;
  code: number;
  data: Images[];
}

export interface Images {
  image: string;
}
