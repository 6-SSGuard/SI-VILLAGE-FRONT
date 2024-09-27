import { getMiddleCategories } from '@/actions/categoryAction';
import { getProductListByCategory } from '@/actions/productsAction';
import ProductListContainer from '@/components/pages/product/ProductListContainer';

import React from 'react';

async function Page({
  searchParams,
}: {
  searchParams: {
    topCategoryName?: string;
    middleCategoryName?: string;
    bottomCategoryName?: string | null;
    subCategoryCode?: string | null;
    lastValue?: string | null;
    pageSize?: number | null;
    sort?: string | null;
  };
}) {
  const initialProductList = await getProductListByCategory(
    searchParams.topCategoryName,
    searchParams.middleCategoryName,
    searchParams.bottomCategoryName,
    searchParams.subCategoryCode,
    searchParams.lastValue,
    searchParams.pageSize,
    searchParams.sort
  );

  const middleCategories = await getMiddleCategories(
    searchParams.middleCategoryName ?? ''
  );

  return (
    <main className="relative">
      <ProductListContainer
        initialProductList={initialProductList.content}
        middleCategories={middleCategories}
        initialSearchParams={searchParams}
      />
    </main>
  );
}

export default Page;
