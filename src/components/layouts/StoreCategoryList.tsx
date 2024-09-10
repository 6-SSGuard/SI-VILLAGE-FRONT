'use client';
import React from 'react';
import Link from 'next/link';

interface CategoryListProps {
  categories: Array<{
    href: string;
    src: string;
    alt: string;
    label: string;
  }>;
}

const StoreCategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="px-6">
      {/* Display the total number of items */}
      <p className="text-[#131922] font-bold mb-2 mt-4">
        총 <span className="text-[#d99c63]">{categories.length}</span>건
      </p>

      {/* Display the corresponding categories */}
      <ul className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <li key={category.label} className="text-center">
            <Link href={category.href}>
              <img src={category.src} alt={category.alt} className="w-full" />
              <p>{category.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreCategoryList;
