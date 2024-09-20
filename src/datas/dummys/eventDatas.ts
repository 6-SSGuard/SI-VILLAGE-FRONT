import { eventListDataType } from '@/types/eventTypes';
import { EventBrandListType } from '@/types/event/eventType';
export const eventDatas: eventListDataType = {
  eventListCnt: 10,
  isLast: false,
  page: 1,
  data: [
    {
      id: 1,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg',
      brandName: 'KNOLL',
      eventName: '다시 없을 특별 혜택',
      eventTitle: 'KNOLL 인상 전 라스트찬스 ~15%할인 + 5% 쿠폰',
      badgeList: ['할인', '쿠폰'],
    },
    {
      id: 2,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/864/00/240800000500864_20240822144908.jpg',
      brandName: 'ARTISH',
      eventName: '캐쥬얼하게 선물하는 아트',
      eventTitle: '미리 준비하는 추석 선물 10% OFF + 쿠폰',
      badgeList: ['신상품', '세일', '특가'],
    },
    {
      id: 3,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/110/00/240800000501110_20240823095449.jpg',
      brandName: 'PRINT BAKERY',
      eventName: '다양한 일상을 담은',
      eventTitle: 'NEW 아트 포스터 할인 + 10% 쿠폰',
      badgeList: ['쿠폰', '세일', '특가'],
    },
    {
      id: 4,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/778/00/240800000500778_20240822132240.jpg',
      brandName: 'AGO',
      eventName: '조형성과 기능성 사이 완벽한 균형',
      eventTitle: 'AGO 역대 최대 혜택, 베스트아이템 15% OFF',
      badgeList: ['쿠폰', '세일', '특가'],
    },
    {
      id: 5,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/773/00/240800000500773_20240822131252.jpg',
      brandName: 'J.LINDEBERG & more',
      eventName: '두근두근 가을 라운딩',
      eventTitle: '뭐 입을지 고민 걱정 끝',
      badgeList: ['쿠폰', '세일', '특가'],
    },
    {
      id: 6,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/021/00/240800000500021_20240821134153.jpg',
      brandName: 'JAJU',
      eventName: 'JAJU 24FW COLLECTION',
      eventTitle: 'URBAN LAYERING',
      badgeList: ['쿠폰', '세일', '특가'],
    },
    {
      id: 7,
      eventImageUrl:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/874/00/240800000500874_20240822145828.jpg',
      brandName: 'LA PERVA',
      eventName: '탄탄하게 준비하는 환절기 스킨케어',
      eventTitle: '쟁여두는 라페르바 상품 UP TO 30%',
      badgeList: ['쿠폰', '세일', '특가'],
    },
  ],
};

export const EventCategoryData = [
  {
    id: 1,
    title: '전체',
    content: 'AllProduct',
    url: '/event',
  },

  {
    id: 2,
    Icon: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/04IconThemeMneuPlanVillage_b.svg',
    title: '이벤트 혜택',
    content: 'event',
    url: '/event/eventfavor',
  },

  {
    id: 3,
    Icon: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/04IconThemeMneuPlan_b.svg',
    title: '브랜드 기획전',
    content: 'brand',
    url: '/event/eventbrand',
  },

  {
    id: 4,
    Icon: 'https://cdn-mo.sivillage.com/mo/assets/comm/image/04IconThemeMneuBenefits_b.svg',
    title: '제휴 혜택',
    content: 'Affiliate Benefits',
    url: '/event/affiliate',
  },
];

export const EventbannerData = [
  {
    id: 1,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/237/00/240900000509237_20240911150913.jpg',
    content: 'MKT 앱 다운로드 혜택',
  },

  {
    id: 2,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/233/00/240900000509233_20240911150618.jpg',
    content: 'MKT 8주년 애프터파티',
  },

  {
    id: 3,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/967/00/240900000509967_20240912141147.jpg',
    content: 'MKT 9월 출석 챌린지',
  },

  {
    id: 4,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/234/00/240900000509234_20240918224933.jpg',
    content: 'MKT 구매할수록 커지는 포인트 패키지',
  },

  {
    id: 5,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/235/00/240900000509235_20240911150735.jpg',
    content: 'MKT 신규가입 웰컴 쿠폰팩',
  },

  {
    id: 6,
    image:
      'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/236/00/240900000509236_20240911150839.jpg',
    content: 'MKT 장기휴면해제 이벤트',
  },
];

export const EventBrandFilterData: EventBrandListType = {
  data: [
    {
      id: 1,
      BrandName: 'A.P.C',
      BrandNum: 1,
      state: false,
    },

    {
      id: 2,
      BrandName: 'ADIDAS',
      BrandNum: 1,
      state: false,
    },

    {
      id: 3,
      BrandName: 'ADIDAS GOLF',
      BrandNum: 1,
      state: false,
    },

    {
      id: 4,
      BrandName: 'ALALA',
      BrandNum: 1,
      state: false,
    },

    {
      id: 5,
      BrandName: 'ALLSAINTS',
      BrandNum: 5,
      state: false,
    },
    {
      id: 6,
      BrandName: 'AMALMUDA',
      BrandNum: 1,
      state: false,
    },

    {
      id: 7,
      BrandName: 'BALMAIN',
      BrandNum: 1,
      state: false,
    },

    {
      id: 8,
      BrandName: 'BAO BAO ISSEY MIYAKE',
      BrandNum: 1,
      state: false,
    },

    {
      id: 9,
      BrandName: 'BASTONG',
      BrandNum: 1,
      state: false,
    },

    {
      id: 10,
      BrandName: 'BEN SHERMAN',
      BrandNum: 3,
      state: false,
    },

    {
      id: 11,
      BrandName: 'CAREL',
      BrandNum: 3,
      state: false,
    },

    {
      id: 12,
      BrandName: 'CELINE',
      BrandNum: 1,
      state: false,
    },

    {
      id: 13,
      BrandName: 'CHEONGDAM30',
      BrandNum: 1,
      state: false,
    },

    {
      id: 14,
      BrandName: 'CHLOE',
      BrandNum: 1,
      state: false,
    },

    {
      id: 15,
      BrandName: 'CHUMS',
      BrandNum: 1,
      state: false,
    },

    {
      id: 16,
      BrandName: 'COLLECT',
      BrandNum: 1,
      state: false,
    },

    {
      id: 17,
      BrandName: 'CORGI',
      BrandNum: 1,
      state: false,
    },

    {
      id: 18,
      BrandName: 'DAVINES',
      BrandNum: 1,
      state: false,
    },

    {
      id: 19,
      BrandName: 'DEPOUND',
      BrandNum: 1,
      state: false,
    },

    {
      id: 20,
      BrandName: 'DIESEL',
      BrandNum: 2,
      state: false,
    },

    {
      id: 21,
      BrandName: 'DIPTQUE',
      BrandNum: 3,
      state: false,
    },

    {
      id: 22,
      BrandName: 'DOROCY',
      BrandNum: 1,
      state: false,
    },

    {
      id: 23,
      BrandName: 'EAAH',
      BrandNum: 1,
      state: false,
    },

    {
      id: 24,
      BrandName: 'ECCO',
      BrandNum: 4,
      state: false,
    },

    {
      id: 25,
      BrandName: 'EENK',
      BrandNum: 1,
      state: false,
    },
    {
      id: 26,
      BrandName: 'EKHON',
      BrandNum: 1,
      state: false,
    },
    {
      id: 27,
      BrandName: 'ENFOLD',
      BrandNum: 6,
      state: false,
    },
    {
      id: 28,
      BrandName: 'ERDEM',
      BrandNum: 1,
      state: false,
    },
    {
      id: 29,
      BrandName: 'FATBOY',
      BrandNum: 1,
      state: false,
    },
    {
      id: 30,
      BrandName: 'FENDI',
      BrandNum: 1,
      state: false,
    },
    {
      id: 31,
      BrandName: 'FFROL',
      BrandNum: 1,
      state: false,
    },
    {
      id: 32,
      BrandName: 'FLOYD',
      BrandNum: 1,
      state: false,
    },
    {
      id: 33,
      BrandName: 'FOLNUA',
      BrandNum: 1,
      state: false,
    },
    {
      id: 34,
      BrandName: 'GANNI',
      BrandNum: 1,
      state: false,
    },
    {
      id: 35,
      BrandName: 'GAP',
      BrandNum: 1,
      state: false,
    },
    {
      id: 36,
      BrandName: 'GCUT',
      BrandNum: 1,
      state: false,
    },
    {
      id: 37,
      BrandName: 'GEMMA ALUS',
      BrandNum: 1,
      state: false,
    },
    {
      id: 38,
      BrandName: 'GIORGIO ARMANI',
      BrandNum: 7,
      state: false,
    },
    {
      id: 39,
      BrandName: 'GOEN.J',
      BrandNum: 1,
      state: false,
    },
    {
      id: 40,
      BrandName: 'GOLDEN DEW',
      BrandNum: 1,
      state: false,
    },
    {
      id: 41,
      BrandName: 'GOLDEN GOOSE',
      BrandNum: 1,
      state: false,
    },
    {
      id: 42,
      BrandName: 'GUCCI',
      BrandNum: 1,
      state: false,
    },
    {
      id: 43,
      BrandName: 'HARUTA',
      BrandNum: 1,
      state: false,
    },
    {
      id: 44,
      BrandName: 'HELLOSIMONE',
      BrandNum: 1,
      state: false,
    },
    {
      id: 45,
      BrandName: 'HERA',
      BrandNum: 1,
      state: false,
    },
    {
      id: 46,
      BrandName: 'HERNO',
      BrandNum: 5,
      state: false,
    },
    {
      id: 47,
      BrandName: 'HUGO',
      BrandNum: 1,
      state: false,
    },
    {
      id: 48,
      BrandName: 'JAJU',
      BrandNum: 5,
      state: false,
    },

    {
      id: 49,
      BrandName: 'JBL',
      BrandNum: 1,
      state: false,
    },

    {
      id: 50,
      BrandName: 'KENZO',
      BrandNum: 2,
      state: false,
    },

    {
      id: 51,
      BrandName: 'KIMZISU',
      BrandNum: 1,
      state: false,
    },

    {
      id: 52,
      BrandName: 'LACOSTE',
      BrandNum: 5,
      state: false,
    },
  ],
};
