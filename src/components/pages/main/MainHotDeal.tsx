'use client';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Scrollbar,
  Autoplay,
  EffectCreative,
} from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import { dealCardDataType } from '@/types/domainTypes';

function MainHotDeal({ dealData }: { dealData: dealCardDataType[] }) {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, EffectCreative]);

  // 시간을 계산하는 함수
  const calculateTimeLeft = () => {
    const now = new Date(); // 현재 시간
    const midnight = new Date(); // 자정 시간 (오늘)
    midnight.setHours(24, 0, 0, 0); // 오늘 24시(자정) 설정

    const difference = midnight.getTime() - now.getTime(); // 자정까지 남은 시간 (밀리초)
    const hours = Math.floor(difference / (1000 * 60 * 60)); // 남은 시간 계산
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // 남은 분 계산
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // 남은 초 계산

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="main-hot-deal-container">
      <h2 className="text-2xl font-bold font-RBC-H mb-2 px-6">Hot Deals</h2>
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        loop={true}
        spaceBetween={50} // 슬라이스 간격을 더 좁게 설정
        slidesPerView={1}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        effect={'creative'}
      >
        {dealData.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="deal-slide p-4 flex flex-col items-start bg-white">
              <div className="relative w-full h-[300px]">
                {' '}
                {/* 이미지 크기 고정 */}
                <Image
                  src={deal.dealImageUrl}
                  alt={deal.brandTitle}
                  layout="fill" // 부모 컨테이너에 맞게 이미지 크기 채우기
                  objectFit="cover"
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 w-full text-center text-white bg-black py-2">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="https://ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com/clock.png"
                      alt="시계"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm font-bold">
                      {timeLeft.hours}: {timeLeft.minutes}:{timeLeft.seconds}{' '}
                      남음
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-semibold mt-4">{deal.brandName}</h3>
              <p className="text-gray-500 mb-2 text-xs">{deal.brandTitle}</p>
              <div className="text-center mt-2">
                <p className="text-xs">{deal.discountPrice.toLocaleString()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainHotDeal;
