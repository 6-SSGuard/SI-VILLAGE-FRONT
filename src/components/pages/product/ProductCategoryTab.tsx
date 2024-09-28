'use client';
import ArrowBottomIcon from '@/components/icons/common/ArrowBottomIcon';
import CloseIcon from '@/components/icons/common/CloseIcon';
import React, { useEffect, useState } from 'react';
import { CategoryBtn } from './CategoryBtn';

export interface Category {
  categoryCode: string;
  categoryName: string;
}

interface ProductCategoryTabProps {
  categories: any[];
  onCategoryChange: (category: string) => void;
  isModalOpen: boolean;
}

const ProductCategoryTab: React.FC<ProductCategoryTabProps> = ({
  categories,
  onCategoryChange,
  isModalOpen,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryClick = (category: Category) => {
    onCategoryChange(category.categoryCode);
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const allCategory = { categoryCode: 'all', categoryName: '전체' };

  // Disable background scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isExpanded]);

  console.log(categories, 'categories');

  return (
    <div
      className={`sticky top-0 z-40 bg-white transition-opacity duration-300 ${isModalOpen ? 'opacity-10' : ''}`}
    >
      {!isExpanded ? (
        // 여기에서 sticky와 관련된 문제를 해결합니다.
        <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide border-y leading-[48px]">
          <CategoryBtn
            category={allCategory}
            onClickUrl={handleCategoryClick}
            className="pl-6 font-semibold flex-shrink-0"
          />
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <CategoryBtn
                key={category.categoryCode}
                category={category}
                onClickUrl={handleCategoryClick}
                className="bg-white whitespace-nowrap"
              />
            ))}
          </div>
          <button
            onClick={toggleExpand}
            className="px-2 py-2 bg-white rounded-full flex-shrink-0 flex items-center justify-center"
          >
            <ArrowBottomIcon />
          </button>
        </div>
      ) : (
        <>
          <div className="fixed bg-white z-50 p-[0px_0px_16px_24px] leading-[48px] overflow-auto max-h-[80vh]">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-sm text-si-787878 leading-[48px]">
                ALL CATEGORIES
              </h2>
              <button
                onClick={toggleExpand}
                className="flex items-center justify-center text-gray-600 px-4"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-wrap mt-4 overflow-y-auto max-h-[calc(80vh-48px)]">
              <CategoryBtn
                category={allCategory}
                onClickUrl={handleCategoryClick}
                className="font-semibold"
              />
              {categories.map((category) => (
                <CategoryBtn
                  key={category.categoryCode}
                  category={category}
                  onClickUrl={handleCategoryClick}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCategoryTab;
