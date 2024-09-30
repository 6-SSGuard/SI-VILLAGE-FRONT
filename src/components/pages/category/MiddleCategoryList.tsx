'use client';
import { getMiddleCategories } from '@/actions/categoryAction';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import { topCategoryType } from '@/types/category/categoryType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function MiddleCategoryList({ categoryCode }: { categoryCode: string | null }) {
  const [middleCategories, setMiddleCategories] = useState<topCategoryType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (categoryCode) {
      setIsLoading(true);
      setError(null);
      getMiddleCategories(categoryCode)
        .then((data) => {
          if (data && data.length > 0) {
            setMiddleCategories(data);
          } else {
            setMiddleCategories([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching middle categories:', error);
          setError('Failed to fetch categories');
          setMiddleCategories([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setMiddleCategories([]);
    }
  }, [categoryCode]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {middleCategories.length > 0 ? (
            middleCategories.map((category) => (
              <Link
                key={category.categoryCode}
                className="text-sm flex justify-between px-2 py-3 items-center"
                href={`/filter?topCategoryName=${categoryCode}&middleCategoryName=${category.categoryCode}&pageSize=${20}&sort=${'newest'}`}
              >
                {category.categoryName}
                <ArrowRightIcon />
              </Link>
            ))
          ) : (
            <li>No categories available</li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
