import { getMiddleCategories } from '@/actions/categoryAction';
import { getProductListByCategory } from '@/actions/productsAction';
import ProductCategoryTab from '@/components/pages/product/ProductCategoryTab';
import ProductList from '@/components/pages/product/ProductList';
// import ProductListCard from '@/components/pages/product/ProductListCard';
import React from 'react';

async function page({
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
  // console.log('searchParams', searchParams);
  const getProductList = await getProductListByCategory(
    searchParams.topCategoryName,
    searchParams.middleCategoryName,
    searchParams.bottomCategoryName,
    searchParams.subCategoryCode,
    searchParams.lastValue,
    searchParams.pageSize,
    searchParams.sort
  );

  const getmiddleList = await getMiddleCategories(
    searchParams.middleCategoryName ?? ''
  );

  // console.log('getMiddleCategories', getmiddleList);
  return (
    <main>
      <ProductCategoryTab categories={getmiddleList} />
      <section className="px-6">
        <ProductList getProductList={getProductList.content} />
      </section>
    </main>
  );
}

export default page;
