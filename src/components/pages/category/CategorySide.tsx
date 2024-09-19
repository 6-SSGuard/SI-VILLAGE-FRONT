'use client';
import React, { useEffect, useState } from 'react';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import Link from 'next/link';
import CategoryLink from './CategoryLink';
import { CategorySideProps } from '@/types/category/categoryType';

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

function CategorySide({ categories }: CategorySideProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0].categoryName);
    }
  }, [categories]);

  // console.log('ttt', categories);
  const currentSubcategories =
    (selectedCategory && subcategories[selectedCategory]) || [];

  console.log(currentSubcategories);
  return (
    <main className="h-screen flex flex-col">
      <div className="flex bg-[#F9F9F9] overflow-x-auto items-center space-x-4 px-4 scrollbar-hide border-b border-gray-300">
        {/* 상단 */}
        <div className="flex text-center space-x-3 px-2 my-4">
          <CategoryLink
            href="#"
            src="/images/store.png"
            alt="store"
            label="찜"
          />
          <CategoryLink
            href="#"
            src="/images/beauty.png"
            alt="beauty"
            label="베스트"
          />
          <CategoryLink href="#" src="/woman.png" alt="woman" label="럭셔리" />
          <CategoryLink
            href="#"
            src="/images/man.png"
            alt="man"
            label="아울렛"
          />
          <CategoryLink
            href="#"
            src="/images/bag.png"
            alt="bag"
            label="공식스토어"
          />
          <CategoryLink
            href="#"
            src="/images/shose.png"
            alt="shose"
            label="딜"
          />
          <CategoryLink href="#" src="/images/ak.png" alt="ak" label="나우" />
          <CategoryLink
            href="#"
            src="/images/sport.png"
            alt="sport"
            label="컨텐츠"
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden  mb-[100px]">
        {/* Sidebar */}
        <div className="basis-1/3 bg-gray-50 scrollbar-hide border-r border-gray-300 overflow-y-auto">
          <ul>
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.categoryCode}
                  className={`p-4 text-sm cursor-pointer ${
                    selectedCategory === category.categoryCode
                      ? 'bg-black text-white font-semibold'
                      : 'text-[#a0a0a0]'
                  }`}
                  onClick={() => setSelectedCategory(category.categoryCode)}
                >
                  {category.categoryName}
                </li>
              ))
            ) : (
              <li className="p-4 text-sm">카테고리가 없습니다.</li>
            )}
          </ul>
        </div>

        {/* Content */}
        <div className="basis-2/3 p-4 overflow-y-auto mb-[10px] scrollbar-hide">
          <h2 className="text-xl font-bold mb-4">
            {selectedCategory || '카테고리 선택'}
          </h2>
          <ul>
            {currentSubcategories.length > 0 ? (
              currentSubcategories.map((subcategory) => (
                <li
                  key={subcategory}
                  className="mb-2 text-sm flex justify-between px-2 py-4"
                >
                  <Link
                    href={`/product/${selectedCategory}/${subcategory}`}
                    className="flex justify-between items-center w-full"
                  >
                    <span>{subcategory}</span>
                    <ArrowRightIcon />
                  </Link>
                </li>
              ))
            ) : (
              <p>하위 카테고리가 없습니다.</p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default CategorySide;
