'use client';
import React from 'react';
import { topCategoryType } from '@/types/category/categoryType';
import { useRouter } from 'next/navigation';

interface TopCategoryListProps {
  data: topCategoryType[];
  categoryName: string;
  onCategorySelect: (category: topCategoryType) => void;
  selectedCategoryCode: string | null;
}

function TopCategoryList({
  data,
  categoryName,
  onCategorySelect,
  selectedCategoryCode,
}: TopCategoryListProps) {
  const router = useRouter();

  const handleCategoryClick = (category: topCategoryType) => {
    onCategorySelect(category);
    router.push(
      `/category/sub-categories?parentCategoryCode=${category.categoryCode}`
    );
  };

  return (
    <nav className="h-screen">
      <ul>
        {data && Array.isArray(data) ? (
          data.map((category) => (
            <li
              key={category.categoryCode}
              onClick={() => handleCategoryClick(category)} // 클릭 시 URL과 선택한 카테고리 업데이트
              className={`p-4 text-sm cursor-pointer ${
                selectedCategoryCode === category.categoryCode
                  ? 'font-bold bg-black text-white'
                  : ''
              }`}
            >
              {category.categoryName}
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </nav>
  );
}

export default TopCategoryList;
