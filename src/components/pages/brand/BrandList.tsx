'use client';
import { BrandDataType, toggleBrandItem } from '@/actions/brandAction';
import EmptyHeartIcon from '@/components/icons/common/EmptyHeartIcon';
import LikeHeart from '@/components/icons/common/LikeHeart';
import ScrollToTopButton from '@/components/layouts/ScrollToTopButton';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

function BrandList({
  searchQuery,
  brandData,
}: {
  searchQuery: string;
  brandData: BrandDataType[];
}) {
  const buttonsAZ = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0~9', 'etc'];
  const buttonsKR = [...'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ', '0~9', 'etc'];
  const stickyHeaderHeight = 56;

  const [selectedButton, setSelectedButton] = useState('A');
  const [isKorean, setIsKorean] = useState(false); // A-Z / ㄱ-ㅎ 상태 관리
  const brandRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // 필터링된 브랜드 리스트 생성
  const koreanOrder = [
    'ㄱ',
    'ㄴ',
    'ㄷ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅅ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  // 브랜드의 첫 글자를 한글 자음, 숫자, 기타 등으로 변환하는 함수
  const getFirstLetter = (brand: BrandDataType, isKorean: boolean) => {
    if (isKorean) {
      let letter = brand.brandIndexLetterKor;
      // 쌍자음 처리
      if (['ㄲ', 'ㄸ', 'ㅃ', 'ㅆ'].includes(letter)) {
        const mapping: { [key: string]: string } = {
          ㄲ: 'ㄱ',
          ㄸ: 'ㄷ',
          ㅃ: 'ㅂ',
          ㅆ: 'ㅅ',
        };
        letter = mapping[letter];
      }

      // 기타 기호 처리 (한글 자음이 아닌 경우)
      if (!koreanOrder.includes(letter)) {
        if (/\d/.test(letter)) {
          return '0~9';
        }
        return 'etc';
      }

      return letter;
    } else {
      const letter = brand.brandIndexLetter;

      // 숫자로 시작하는 경우
      if (/\d/.test(letter)) {
        return '0~9';
      }

      // 기타 기호 처리
      if (!/[a-zA-Z]/.test(letter)) {
        return 'etc';
      }

      return letter.toUpperCase(); // A-Z 모드에서는 대문자로 정렬
    }
  };

  // 브랜드 데이터 그룹화 로직 (A-Z 또는 ㄱ-ㅎ)
  const groupedBrands = (brandData ?? []).reduce(
    (acc, brand) => {
      const firstLetter = getFirstLetter(brand, isKorean); // 첫 글자를 결정

      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(brand);
      return acc;
    },
    {} as { [key: string]: BrandDataType[] }
  );

  // 필터링된 브랜드 리스트 생성
  const filteredBrands = Object.keys(groupedBrands ?? {})
    .sort((a, b) => {
      if (isKorean) {
        const indexA = koreanOrder.indexOf(a);
        const indexB = koreanOrder.indexOf(b);

        // ㄱ이 가장 먼저 오도록 처리, 그 외는 인덱스 순서에 따라 정렬
        if (indexA === -1 && indexB === -1) return 0; // 둘 다 etc나 0~9일 경우 위치 유지
        if (indexA === -1) return 1; // a가 etc거나 0~9인 경우 뒤로
        if (indexB === -1) return -1; // b가 etc거나 0~9인 경우 뒤로
        return indexA - indexB;
      } else {
        // A-Z 모드일 경우 알파벳, 숫자, 기타 순서로 정렬
        if (a === '0~9' || b === '0~9') return a === '0~9' ? -1 : 1;
        if (a === 'etc' || b === 'etc') return a === 'etc' ? 1 : -1;
        return a.localeCompare(b);
      }
    })
    .reduce(
      (acc, letter) => {
        const filtered = groupedBrands[letter].filter((brand) =>
          brand.brandEngName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) {
          acc[letter] = filtered;
        }
        return acc;
      },
      {} as { [key: string]: BrandDataType[] }
    );

  const handleLikeClick = async (brandId: number) => {
    try {
      await toggleBrandItem(brandId);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

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
                  <p className="font-semibold">{brand.brandEngName}</p>
                  <p className="text-sm mt-3">{brand.brandKorName}</p>
                </div>
                <div className="h-6">
                  <button onClick={() => handleLikeClick(brand.brandId)}>
                    <EmptyHeartIcon />
                  </button>
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
