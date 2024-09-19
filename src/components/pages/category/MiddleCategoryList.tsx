'use client';
import { getMiddleCategories } from '@/actions/categoryAction';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import { topCategoryType } from '@/types/category/categoryType';
import React, { useEffect, useState } from 'react';

function MiddleCategoryList({ categoryCode }: { categoryCode: string | null }) {
  const [middleCategories, setMiddleCategories] = useState<topCategoryType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (categoryCode) {
      setIsLoading(true);
      getMiddleCategories(categoryCode)
        .then((data) => {
          // console.log(data.categories);
          setMiddleCategories(data.categories || []);
        })
        .catch((error) => {
          console.error('Error fetching middle categories:', error);
          setMiddleCategories([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [categoryCode]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {middleCategories.map((category) => (
            <li
              key={category.categoryCode}
              className="text-sm flex justify-between px-2 py-3 items-center"
            >
              {category.categoryName}
              <ArrowRightIcon />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
