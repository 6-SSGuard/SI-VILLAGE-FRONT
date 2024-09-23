'use client';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState } from 'react';
import { DetailProductInfoData } from '@/types/detail/detailproductinfo';
import { Swiper as SwiperType } from 'swiper/types';

function DetailProductImageList({ data }: { data: DetailProductInfoData[] }) {
  //스와이퍼 인덱스 로직
  const [currentPage, setCurrentPage] = useState(1);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  //베스트 페이지에서 전달받은 productname확인
  //라우터 객체 생성 => 전달받은 라우팅값을 productname 에 저장
  const router = useParams();
  const productname = router.productname;
  const ProductItemData = data.find(
    (item) => item.product_code === productname
  );

  return (
    <div className="w-full h-[580px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10} // 슬라이드 간의 간격
        slidesPerView={1} // 한 번에 하나의 슬라이드만 표시
        loop={true} // 슬라이더가 끝나면 처음으로 돌아가도록 설정
        onSlideChange={handleSlideChange}
        // pagination={{ clickable: true }} // 페이지네이션 활성화
        // 좌우 네비게이션 버튼 활성화
      >
        {ProductItemData?.productImageList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[400px] h-[550px] z-10">
              <Image
                src={item}
                alt="test"
                width={450}
                height={600}
                className="object-cover w-[450px] h-[550px]" // 이미지가 슬라이드에 맞게 꽉 차도록 설정
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
        ))}

        <div className="flex justify-end pr-4">
          <div className="py-1 text-xs justify-end">
            <span className="font-bold">{currentPage}</span> /{' '}
            <span>{ProductItemData?.productImageList.length}</span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default DetailProductImageList;
