import { getTopCategories } from '@/actions/categoryAction';
import CategoryHeader from '@/components/pages/category/CategoryHeader';
import CategorySide from '@/components/pages/category/CategorySide';
import {
  CategorySideProps,
  topCategoryType,
} from '@/types/category/categoryType';
import React from 'react';

async function page() {
  const topCategoryData: topCategoryType[] = await getTopCategories();

  // console.log('test', topCategoryData);

  return (
    <main className="h-screen overflow-hidden">
      <CategoryHeader />
      <CategorySide categories={topCategoryData} />
    </main>
  );
}

export default page;
