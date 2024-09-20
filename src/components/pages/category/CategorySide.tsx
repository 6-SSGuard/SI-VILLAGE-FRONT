'use client';
import React, { useEffect, useRef, useState } from 'react';
import CategoryLink from './CategoryLink';
import {
  CategorySideProps,
  topCategoryType,
} from '@/types/category/categoryType';
import TopCategoryList from './TopCategoryList';
import MiddleCategoryList from './MiddleCategoryList';

function CategorySide({ categories }: CategorySideProps) {
  const [selectedCategoryCode, setSelectedCategoryCode] = useState<
    string | null
  >(null);

  const categoriesRef = useRef(categories);

  useEffect(() => {
    const cats = categoriesRef.current;
    if (cats && Array.isArray(cats) && cats.length > 0) {
      setSelectedCategoryCode(cats[1].categoryCode);
    }
  }, []);

  const handleCategorySelect = async (category: topCategoryType) => {
    setSelectedCategoryCode(category.categoryCode);
  };

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

      <div className="flex flex-1 overflow-hidden mb-[100px]">
        {/* Sidebar */}
        <div className="basis-1/3 bg-gray-50 scrollbar-hide border-r border-gray-300 overflow-y-auto">
          <TopCategoryList
            data={categories}
            categoryName={
              categories && Array.isArray(categories)
                ? categories.find(
                    (category) => category.categoryCode === selectedCategoryCode
                  )?.categoryName || ''
                : ''
            }
            onCategorySelect={handleCategorySelect}
            selectedCategoryCode={selectedCategoryCode}
          />
        </div>

        {/* Content */}
        <div className="basis-2/3 p-4 overflow-y-auto mb-[10px] scrollbar-hide">
          <MiddleCategoryList categoryCode={selectedCategoryCode} />
        </div>
      </div>
    </main>
  );
}

export default CategorySide;
