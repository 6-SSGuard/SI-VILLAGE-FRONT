'use client';
import ScrollToTopButton from '@/components/layouts/ScrollToTopButton';
import { brandResponse } from '@/types/product/brandType';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

function BrandList({
  searchQuery,
  brandData,
}: {
  searchQuery: string;
  brandData: brandResponse[];
}) {
  const buttonsAZ = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0~9', 'etc'];
  const buttonsKR = [...'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ', '0~9', 'etc'];
  const stickyHeaderHeight = 56;

  const [selectedButton, setSelectedButton] = useState('A');
  const [isKorean, setIsKorean] = useState(false); // A-Z / ㄱ-ㅎ 상태 관리
  const brandRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // 브랜드 데이터 그룹화 로직 (A-Z 또는 ㄱ-ㅎ)
  const groupedBrands = brandData.reduce(
    (acc, brand) => {
      // brand_list_type에 따라 구분
      const firstLetter = brand.brand_index_letter;
      const brandType = brand.brand_list_type;

      // 선택된 모드에 맞는 데이터만 그룹화
      if (
        (isKorean && brandType === 'ko') ||
        (!isKorean && brandType === 'en')
      ) {
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(brand);
      }
      return acc;
    },
    {} as { [key: string]: brandResponse[] }
  );

  // 그룹별로 정렬
  Object.keys(groupedBrands).forEach(
    (key) =>
      (groupedBrands[key] = groupedBrands[key].sort((a, b) =>
        a.brand_name.localeCompare(b.brand_name)
      ))
  );

  // 필터링된 브랜드 리스트 생성
  const filteredBrands = Object.keys(groupedBrands).reduce(
    (acc, letter) => {
      const filtered = groupedBrands[letter].filter((brand) =>
        brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[letter] = filtered;
      }
      return acc;
    },
    {} as { [key: string]: brandResponse[] }
  );

  // 특정 브랜드로 스크롤 이동
  const scrollToBrand = (letter: string) => {
    const brandElement = brandRefs.current[letter];
    if (brandElement !== undefined && brandElement !== null) {
      setSelectedButton(letter);
      window.scrollTo({
        top: brandElement.offsetTop - stickyHeaderHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="relative flex items-center my-4">
        {/* Fixed buttons on the left */}
        <div className="absolute left-0 top-1 flex items-start ml-5">
          <button
            onClick={() => setIsKorean(false)}
            className={`mb-2 text-sm min-w-[30px] ${
              !isKorean ? 'font-bold' : 'text-gray-500'
            }`}
          >
            A-Z
          </button>
          <button
            onClick={() => setIsKorean(true)}
            className={`text-sm ml-2 min-w-[35px] ${
              isKorean ? 'font-bold' : 'text-gray-500'
            }`}
          >
            ㄱ-ㅎ
          </button>
        </div>

        {/* Scrollable button list on the right */}
        <div className="ml-24 flex overflow-x-auto scrollbar-hide w-full">
          {(isKorean ? buttonsKR : buttonsAZ).map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToBrand(letter)}
              className={`flex-shrink-0 w-8 h-8 mx-[1px] text-xs text-center ${
                selectedButton === letter
                  ? 'border-2 border-black text-black bg-white'
                  : 'border-2 border-gray-300 text-gray-700 bg-white'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* 브랜드 리스트 */}
      <div className="mt-8">
        {Object.keys(filteredBrands).map((letter) => (
          <div
            key={letter}
            ref={(el) => {
              brandRefs.current[letter] = el;
            }}
            className="mb-8 mx-4"
          >
            <div className="border-b-2 w-full mx-auto p-[0px_16px_9px]">
              {/* 조건에 따라 letter 제목 출력 */}
              <h3 className="font-semibold">{letter}</h3>
            </div>

            {filteredBrands[letter].map((brand, idx) => (
              <div key={idx} className="flex justify-between p-4">
                <div className="flex flex-col">
                  <p className="font-semibold">{brand.brand_name}</p>
                  <p className="text-sm mt-3">{brand.brand_name_ko}</p>
                </div>
                <div className="h-6">
                  <Image
                    src="/images/heart.png"
                    alt="heart"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* "맨 위로 가기" 버튼 컴포넌트 */}
      <ScrollToTopButton />
    </div>
  );
}

export default BrandList;
