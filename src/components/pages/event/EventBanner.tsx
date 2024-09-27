'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay } from 'swiper/modules';

import { EventbannerData } from '@/datas/dummys/eventDatas';
import Image from 'next/image';
function EventBanner() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPage(swiper.realIndex + 1);
  };
  return (
    <div className="">
      <div className="mt-6 h-[85px] flex swiper-container ">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full h-p85px"
          effect={'creative'}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {EventbannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt={item.content}
                layout="fill"
                className="w-full h-[85px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ul className="flex gap-1 mt-5 justify-center">
        {EventbannerData.map((_, index) => (
          <li key={index} className="flex justify-center items-center mt-2">
            <span
              className={`w-[10px] h-[1px] ${
                currentPage === index + 1 ? 'bg-black' : 'bg-gray-200'
              }`}
            ></span>
          </li>
        ))}
      </ul>

      <div className="h-[8px] mt-12 bg-gray-100"></div>
    </div>
  );
}

export default EventBanner;
