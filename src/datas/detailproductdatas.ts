import { DetailProductList } from '@/types/detail/detailproductinfo';
import { DetailReviewInfoListType } from '@/types/detail/detailReviewType';
import { DetailReviewListType } from '@/types/detail/detailReviewListType';

//제품의 상세정보에 대한 아이템 정의
export const ProductData: DetailProductList = {
  allCount: 10,
  data: [
    {
      productname: '01P0000000025',
      productImageList: [
        'https://image.sivillage.com/upload/C00001/goods/org/093/230908006345093.jpg',
        'https://image.sivillage.com/upload/C00001/goods/org/093/230908006345093.jpg',
        'https://image.sivillage.com/upload/C00001/goods/org/094/230908006345094.jpg',
        'https://image.sivillage.com/upload/C00001/goods/org/094/230908006345094.jpg',
        'https://image.sivillage.com/upload/C00001/goods/org/096/230908006345096.jpg',
        'https://image.sivillage.com/upload/C00001/goods/org/096/230908006345096.jpg',
      ],
      productTitle: 'ARMANI EXCHANGE',
      productContent: '남성 오버픽 나일론 덕다운 패딩',
      productislike: 10,
      productdiscountRate: '50',
      productCurrentColor: '블랙',
      productPrice: 600000,
      productColorImageList: [
        'https://image.sivillage.com/upload/C00001/goods/org/006/230823006039006.jpg?RS=750&SP=1',
      ],
      productReviewCount: 100,
    },

    {
      productname: '01P0000000026',
      productImageList: [
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
        'https://image.sivillage.com/upload/C00001/s3/goods/org/934/240429015016934.jpg',
      ],
      productTitle: 'ONEILL',
      productContent: '공용 비스타 플리스 트레이닝 상의 OUFTK4152-199',
      productislike: 10,
      productdiscountRate: '50',
      productPrice: 500000,
      productCurrentColor: '블랙',
      productColorImageList: [
        'https://image.sivillage.com/upload/C00001/goods/org/006/230823006039006.jpg?RS=750&SP=1',
      ],
      productReviewCount: 100,
    },
  ],
};

export const ReviewInfoData: DetailReviewInfoListType = {
  count: 10,
  data: [
    {
      id: 1,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 2,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 3,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 4,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 5,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 6,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },

    {
      id: 6,
      image: '',
      nickname: 'asdasd',
      likeNumber: 4.5,
      reviewStar: '/five_star.png',
      date: '2024.08.12',
      location: '부산광역시 센텀',
      size: 'XL',
      color: '블랙',
      content:
        '사이즈가 약간 큰 감은 있지만 가볍고 따뜻합니다. 디자인도 이쁘네요',
      type: 'text',
      photoImageList: [
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
        'https://image.sivillage.com/upload/C00001/eval/509/202402161246509_00001.jpg',
      ],
    },
  ],
};
