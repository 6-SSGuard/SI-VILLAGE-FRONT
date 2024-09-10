import AdCarousel from '@/components/icons/common/AdCarousel';
import ArrowLeftIcon from '@/components/icons/common/ArrowLeftIcon';
import SearchIcon from '@/components/icons/common/SearchIcon';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

interface SearchModalProps {
  onClose: () => void;
}

const popularSearches = [
  '인기 검색어 1',
  '인기 검색어 2',
  '인기 검색어 3',
  '인기 검색어 4',
  '인기 검색어 5',
  '인기 검색어 6',
  '인기 검색어 7',
  '인기 검색어 8',
  '인기 검색어 9',
  '인기 검색어 10',
  '인기 검색어 11',
  '인기 검색어 12',
];
function SearchModal({ onClose }: SearchModalProps) {
  const recentSearches: string[] = []; // 최근 검색어 예시 데이터, 없으면 "최근 검색어가 없습니다" 출력

  const slides = [];

  // 페이지당 항목 수
  const itemsPerPage = 6;

  // 슬라이드 데이터 배열 생성
  for (let i = 0; i < popularSearches.length; i += itemsPerPage) {
    slides.push(popularSearches.slice(i, i + itemsPerPage));
  }
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden">
      <div className="flex items-center">
        <button type="button" onClick={onClose}>
          <ArrowLeftIcon />
        </button>
        <Image
          src="/siv_logo.png"
          alt="메인페이지 이미지"
          width={180}
          height={65}
          className="ml-2" // 아이콘과 이미지 사이의 간격을 위해 추가
          style={{ verticalAlign: 'middle' }} // y축 중앙 정렬을 위한 스타일
        />
      </div>
      <div className="w-full max-w-lg bg-white p-4">
        {/* 검색창 */}
        <div className="flex border-b border-black mb-4">
          <input
            type="text"
            placeholder="놓칠 수 없는 최대 30% 페이백"
            className="w-full p-2"
          />
          <SearchIcon />
        </div>

        {/* 최근 검색어 */}
        <h1 className="font-bold mb-2">최근 검색어</h1>
        {recentSearches.length > 0 ? (
          <ul className="mb-4">
            {recentSearches.map((search, index) => (
              <li key={index} className="text-gray-600">
                {search}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-si-text-gray mb-4 text-[14px]">
              최근 검색어가 없습니다
            </p>
          </div>
        )}

        {/* 금액대별 선물 추천 */}
        <h1 className="font-bold mb-2">금액대별 선물 추천</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="p-2 bg-[#D99C6326] text-[#CC8542]">추천 1</button>
          <button className="p-2 bg-[#D99C6326] text-[#CC8542]">추천 2</button>
          <button className="p-2 bg-[#D99C6326] text-[#CC8542]">추천 3</button>
          <button className="p-2 bg-[#D99C6326] text-[#CC8542]">추천 4</button>
        </div>

        {/* 인기 검색어 */}
        <h1 className="font-bold mb-2">인기 검색어</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => '',
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <ul className="grid grid-cols-2 gap-4">
                {slide.map((search, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="mr-2 font-semibold">
                      {index * itemsPerPage + idx + 1}
                    </span>
                    {search}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AdCarousel />
    </div>
  );
}

export default SearchModal;
