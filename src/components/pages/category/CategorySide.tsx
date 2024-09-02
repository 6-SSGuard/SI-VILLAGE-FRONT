'use client';
import React, { useState } from 'react';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="#" className="flex-shrink-0">
            <Image src="/store.png" alt="store" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">찜</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/beauty.png" alt="beauty" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">베스트</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/woman.png" alt="woman" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">럭셔리</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/man.png" alt="man" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">아울렛</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/bag.png" alt="bag" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">공식스토어</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/shose.png" alt="shose" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">딜</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/ak.png" alt="ak" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">나우</span>
          </Link>

          <Link href="#" className="flex-shrink-0">
            <Image src="/sport.png" alt="sport" width={56} height={56} />
            <span className="text-xs font-bold text-[#787878]">컨텐츠</span>
          </Link>
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
                {subcategory}
                <ArrowRightIcon />
              </li>
            )) || <p>하위 카테고리가 없습니다.</p>}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default CategorySide;
