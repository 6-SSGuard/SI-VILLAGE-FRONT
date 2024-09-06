import React from 'react';

interface Category {
  id: string;
  name: string;
}

// 카테고리 버튼 컴포넌트
export const CategoryBtn: React.FC<{
  category: Category;
  onClick: (category: Category) => void;
  className?: string;
}> = ({ category, onClick, className = '' }) => (
  <button
    onClick={() => onClick(category)}
    className={`text-gray-700 ${className}`}
  >
    <span className="pr-6">{category.name}</span>
  </button>
);
