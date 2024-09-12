'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState } from 'react';
import { DetailProductImageData } from '@/types/detail/detailType';
import { Swiper as SwiperType } from 'swiper/types';

function DetailProductImageList({ data }: { data: DetailProductImageData[] }) {
  //스와이퍼 인덱스 로직
  const [currentPage, setCurrentPage] = useState(1);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  return (
    <div className="w-[400px] h-[580px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // 슬라이드 간의 간격
        slidesPerView={1} // 한 번에 하나의 슬라이드만 표시
        loop={true} // 슬라이더가 끝나면 처음으로 돌아가도록 설정
        onSlideChange={handleSlideChange}
        // pagination={{ clickable: true }} // 페이지네이션 활성화
        // 좌우 네비게이션 버튼 활성화
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[400px] h-[550px]">
              <Image
                src={item.image}
                alt={`Product Image ${item.id}`}
                width={450}
                height={600}
                className="object-cover w-[450px] h-[550px]" // 이미지가 슬라이드에 맞게 꽉 차도록 설정
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="flex justify-end pr-4">
          <div className="py-1 text-xs justify-end">
            <span className="font-bold">{currentPage}</span> /{' '}
            <span>{data.length}</span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default DetailProductImageList;
