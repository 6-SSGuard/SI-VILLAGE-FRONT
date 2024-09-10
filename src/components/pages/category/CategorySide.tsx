'use client';
import React, { useState } from 'react';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import Link from 'next/link';
import CategoryLink from './CategoryLink';

const subcategories: { [key: string]: string[] } = {
  뷰티: [
    '전체',
    '향수',
    '스킨케어',
    '메이크업',
    '바디케어',
    '헤어케어',
    '맨즈케어',
  ],
  여성의류: ['전체', '케어'],
  남성의류: ['전체', '뭔데'],
  백: ['전체', '여성 가방', '남성 가방'],
  슈즈: ['전체', '여성', '성'],
  액세서리: ['전체', '여성 세서리', '성 세서리'],
  스포츠레저: ['전체', '화', '구두', '신발', '스포츠'],
  골프: ['전체', '케어'],
  키즈: ['전체', '케어'],
  라이프: ['전체', '케어'],
};

const categories = [
  '뷰티',
  '여성의류',
  '남성의류',
  '백',
  '슈즈',
  '액세서리',
  '스포츠레저',
  '골프',
  '키즈',
  '라이프',
];

function CategorySide() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  return (
    <main className="h-screen flex flex-col">
      <div className="flex bg-[#F9F9F9] overflow-x-auto items-center space-x-4 px-4 scrollbar-hide border-b border-gray-300">
        {/* 상단 */}
        <div className="flex text-center space-x-3 px-2 my-4">
          <CategoryLink href="#" src="/store.png" alt="store" label="찜" />
          <CategoryLink
            href="#"
            src="/beauty.png"
            alt="beauty"
            label="베스트"
          />
          <CategoryLink href="#" src="/woman.png" alt="woman" label="럭셔리" />
          <CategoryLink href="#" src="/man.png" alt="man" label="아울렛" />
          <CategoryLink href="#" src="/bag.png" alt="bag" label="공식스토어" />
          <CategoryLink href="#" src="/shose.png" alt="shose" label="딜" />
          <CategoryLink href="#" src="/ak.png" alt="ak" label="나우" />
          <CategoryLink href="#" src="/sport.png" alt="sport" label="컨텐츠" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden  mb-[100px]">
        {/* Sidebar */}
        <div className="basis-1/3 bg-gray-50 scrollbar-hide border-r border-gray-300 overflow-y-auto">
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`p-4 text-sm cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-black text-white font-semibold'
                    : 'text-[#a0a0a0]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="basis-2/3 p-4 overflow-y-auto mb-[10px] scrollbar-hide">
          <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
          <ul>
            {subcategories[selectedCategory]?.map((subcategory) => (
              <li
                key={subcategory}
                className="mb-2 text-sm flex justify-between px-2 py-4"
              >
                {/* 하위 카테고리 클릭 시 product 페이지로 이동 */}
                <Link
                  href={`/product/${selectedCategory}/${subcategory}`}
                  className="flex justify-between items-center w-full"
                >
                  <span>{subcategory}</span>
                  <ArrowRightIcon />
                </Link>
              </li>
            )) || <p>하위 카테고리가 없습니다.</p>}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default CategorySide;
