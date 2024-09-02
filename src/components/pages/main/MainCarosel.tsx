'use client';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';

function MainCarosel() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  const slideData = [
    {
      id: 1,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/936/00/240800000500936_20240822154540.jpg?cVer=27093928&RS=750&SP=1',

      brand: 'VIDIVICI',
      title: '완벽한 가을',
      title2: '아웃도어 케어',
      subtitle: '선케어 1+1 & 상품별 사은품 증정',
    },
    {
      id: 2,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/773/00/240800000499773_20240821090238.jpg?RS=750&SP=1',
      brand: 'J.LINDEBERG & more',
      title: '두근두근',
      title2: '가을 라운딩',
      subtitle: '뭐 입을지 고민 걱정 끝!',
    },
    {
      id: 3,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/342/00/240800000503342_20240828143514.jpg?RS=750&SP=1',
      brand: '',
      title: '스니커즈의',
      title2: '새로운 기준',
      subtitle: '차별화된 컬렉션을 제안합니다',
    },
    {
      id: 4,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/986/30/240800000500986_20240822162803.jpg?RS=750&SP=1',
      brand: '',
      title: '',
      title2: '',
      subtitle: '',
    },
    {
      id: 5,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/030/00/240800000501030_20240822171104.jpg?cVer=28092644?cVer=28092706&RS=750&SP=1',
      brand: 'LOIVIE',
      title: '언제 받아도',
      title2: '기분 좋은 향기',
      subtitle: '퍼퓸&바디케어 UP TO 35% + 금액별 사은품',
    },
    {
      id: 6,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/733/00/240800000502733_20240828095605.jpg?RS=750&SP=1',

      brand: 'STUDIO TOMBOY',
      title: '미니멀 무드',
      title2: '독보적 실루엣',
      subtitle: 'THE MOMENT  OF THE PURITY',
    },
    {
      id: 7,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/822/00/240800000499822_20240821095147.jpg?RS=750&SP=1',

      brand: 'ALLSAINTS & more',
      title: '개성을 드러내는',
      title2: '유럽 브랜드',
      subtitle: '뉴 시즌 & 서머 세일 최대 75% OFF + 쿠폰',
    },
    {
      id: 8,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/974/00/240800000499974_20240821132242.jpg?RS=750&SP=1',

      brand: 'VILLEROY & BOCH &more',
      title: '센스있는 선물',
      title2: '테이블웨어',
      subtitle: '풍성한 혜택 UP TO 60% + 쿠폰',
    },
    {
      id: 9,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/833/00/240800000499833_20240821100028.jpg?RS=750&SP=1',
      brand: 'DELLA LANA & more',
      title: '소재부터 남다른',
      title2: '만듦새 좋은 옷',
      subtitle: '선물포장 걱정 끝! 기프트 박스 증정',
    },
    {
      id: 10,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/129/00/240800000500129_20240821143856.jpg?RS=750&SP=1',

      brand: 'BOTTEGA VENETA & more',
      title: '오픈런은',
      title2: '넣어두세요',
      subtitle: '럭셔리 아이템 UP TO 60% OFF + 20% 쿠폰',
    },
    {
      id: 11,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/811/00/240800000499811_20240821093352.jpg?RS=750&SP=1',
      brand: 'ZEROHALLIBURTON',
      title: '감동 그 이상의',
      title2: '퀄리티',
      subtitle: '최대 40% OFF + 10% 상품쿠폰 증정',
    },
    {
      id: 12,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/855/00/240800000500855_20240822144620.jpg?RS=750&SP=1',
      brand: 'MUSEE',
      title: '뮤제와',
      title2: '함께 하는 가을',
      subtitle: '24F/W 시그니처 컬렉션 OPEN',
    },
    {
      id: 13,
      imgSrc:
        'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/003/00/240800000500003_20240821133616.jpg?RS=750&SP=1',
      brand: 'SULWHASOO & more',
      title: '선물하기',
      title2: '좋은 날',
      subtitle: '뷰티 기프트 쇼핑백 & 선물세트 최대 45% OFF',
    },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        navigation={false} // prev, next button
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <Image
                src={slide.imgSrc}
                alt={`slide-${slide.id}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 flex items-center justify-center mt-20">
                <div className="text-white text-center bg-opacity-50 p-4">
                  <p className="font-bold mb-3">
                    <span>{slide.brand}</span>
                  </p>
                  <p className="text-4xl font-bold">{slide.title}</p>
                  <p className="text-4xl font-bold mb-3">{slide.title2}</p>
                  <p className="text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainCarosel;
