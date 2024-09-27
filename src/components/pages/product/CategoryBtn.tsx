'use client';
import React from 'react';
import { Category } from './ProductCategoryTab';

export const CategoryBtn: React.FC<{
  category: Category;
  onClickUrl: (category: Category) => void;
  className?: string;
}> = ({ category, onClickUrl, className = '' }) => (
  <button
    onClick={() => onClickUrl(category)}
    className={`text-gray-700 ${className}`}
  >
    <span className="pr-6">{category.categoryName}</span>
  </button>
);
