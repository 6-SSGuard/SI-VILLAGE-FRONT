'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCategoryTab from './ProductCategoryTab';
import ProductList from './ProductList';
import { getProductListByCategory } from '@/actions/productsAction';
import ProductSortModal from './ProductSortModal';

interface ProductListContainerProps {
  initialProductList: any[];
  middleCategories: any[];
  initialSearchParams: any;
}

function ProductListContainer({
  initialProductList,
  middleCategories,
  initialSearchParams,
}: ProductListContainerProps) {
  const [productList, setProductList] = useState(initialProductList);
  const [searchParams, setSearchParams] = useState(initialSearchParams);

  const router = useRouter();

  const handleCategoryChange = async (newCategory: string) => {
    const newSearchParams = {
      ...searchParams,
      bottomCategoryName: newCategory,
    };
    setSearchParams(newSearchParams);

    const newProductList = await getProductListByCategory(
      newSearchParams.topCategoryName,
      newSearchParams.middleCategoryName,
      newSearchParams.bottomCategoryName,
      newSearchParams.subCategoryCode,
      newSearchParams.lastValue,
      newSearchParams.pageSize,
      newSearchParams.sort
    );

    setProductList(newProductList.content);

    // URL 업데이트
    const queryString = new URLSearchParams(newSearchParams).toString();
    router.push(`/filter?${queryString}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <ProductCategoryTab
        categories={middleCategories}
        onCategoryChange={handleCategoryChange}
        isModalOpen={isModalOpen}
      />
      <section className="px-4">
        <ProductList
          getProductList={productList}
          onOpenModal={handleOpenModal}
        />
      </section>
      <ProductSortModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ProductListContainer;
