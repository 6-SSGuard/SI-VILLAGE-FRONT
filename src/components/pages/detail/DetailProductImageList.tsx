'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { detailImageListReq } from '@/types/detail/detailproductinfo';

function DetailProductImageList({ data }: { data: detailImageListReq[] }) {
  //스와이퍼 인덱스 로직
  const [currentPage, setCurrentPage] = useState(1);
  const [imageData, setImageData] = useState<detailImageListReq[]>([]);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  // 데이터가 변경될 때 useEffect로 처리
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setImageData(data); // 이미지 데이터가 존재할 때만 설정
    }
  }, [data]);

  console.log(imageData, 'image data');

  return (
    <div className="w-full h-[550px] ">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // 슬라이드 간의 간격
        slidesPerView={1} // 한 번에 하나의 슬라이드만 표시
        loop={true} // 슬라이더가 끝나면 처음으로 돌아가도록 설정
        onSlideChange={handleSlideChange}
        // pagination={{ clickable: true }} // 페이지네이션 활성화
        // 좌우 네비게이션 버튼 활성화
      >
        {imageData.length > 0 ? (
          imageData.map((item, index) => (
            <SwiperSlide key={index} className="pl-4">
              <div className="w-[400px] h-[500px] py-16 ">
                <Image
                  src={item.imageUrl}
                  alt="Product Image"
                  width={400}
                  height={550}
                  className="object-contain w-[450px] h-[500px] scale-75" // 이미지가 슬라이드에 맞게 꽉 차도록 설정
                />
                <div
                  className="absolute top-0 left-0 w-full h-[170px] z-10"
                  style={{
                    background:
                      'linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)',
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No images found</p>
        )}
        <div className="flex justify-end mb-4">
          <div className=" text-xs justify-end pr-6">
            <span className="font-bold">{currentPage}</span> /{' '}
            <span>{imageData.length}</span> {/* 이미지 총 개수 출력 */}
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default DetailProductImageList;
