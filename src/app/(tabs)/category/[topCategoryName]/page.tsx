import { getTopCategories } from '@/actions/categoryAction';
import CategoryHeader from '@/components/pages/category/CategoryHeader';
import CategorySide from '@/components/pages/category/CategorySide';
import {
  CategorySideProps,
  topCategoryType,
} from '@/types/category/categoryType';
import React from 'react';

async function page() {
  const topCategoryData: CategorySideProps = await getTopCategories();

  return (
    <main className="h-screen overflow-hidden">
      <CategoryHeader />
      <CategorySide categories={topCategoryData.categories} />
    </main>
  );
}

export default page;
