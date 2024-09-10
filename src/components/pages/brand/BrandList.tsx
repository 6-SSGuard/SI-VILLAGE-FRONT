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
  const buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const stickyHeaderHeight = 56;

  const [selectedButton, setSelectedButton] = useState('A');
  const brandRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const groupedBrands = brandData.reduce(
    (acc, brand) => {
      const firstLetter = brand.brandEngName.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(brand);
      return acc;
    },
    {} as { [key: string]: brandResponse[] }
  );

  Object.keys(groupedBrands).forEach(
    (key) =>
      (groupedBrands[key] = groupedBrands[key].sort((a, b) =>
        a.brandEngName.localeCompare(b.brandEngName)
      ))
  );

  const filteredBrands = Object.keys(groupedBrands).reduce(
    (acc, letter) => {
      const filtered = groupedBrands[letter].filter((brand) =>
        brand.brandEngName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[letter] = filtered;
      }
      return acc;
    },
    {} as { [key: string]: brandResponse[] }
  );

  const scrollToBrand = (letter: string) => {
    if (brandRefs.current[letter]) {
      setSelectedButton(letter);
      window.scrollTo({
        top: brandRefs.current[letter]!.offsetTop - stickyHeaderHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* A-Z 버튼 */}
      <div className="flex overflow-x-auto scrollbar-hide ml-4">
        {buttons.map((letter) => (
          <button
            key={letter}
            onClick={() => scrollToBrand(letter)}
            className={`px-2 py-1 mx-[1.5px] text-xs mt-4 ${
              selectedButton === letter
                ? 'border-2 border-black text-black bg-white'
                : 'border-2 border-gray-300 text-gray-700 bg-white'
            }`}
          >
            {letter}
          </button>
        ))}
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
            <div className="border-b-2 w-full mx-auto">
              <h3 className="text-xl font-bold">{letter}</h3>
            </div>
            {filteredBrands[letter].map((brand) => (
              <div
                key={brand.brandId}
                className="flex justify-between p-4 font-semibold"
              >
                <p>{brand.brandEngName}</p>
                <Image
                  src="/images/heart.png"
                  alt="heart"
                  width={24}
                  height={24}
                />
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
