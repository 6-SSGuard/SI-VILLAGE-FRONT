import React from 'react';
import { topCategoryType } from '@/types/category/categoryType';

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
  return (
    <nav className="h-screen">
      <ul>
        {data.map((category) => (
          <li
            key={category.categoryCode}
            className={`p-4 text-sm cursor-pointer ${
              selectedCategoryCode === category.categoryCode
                ? 'bg-black text-white font-semibold'
                : 'text-[#a0a0a0]'
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopCategoryList;
