'use client';
import React, { useState } from 'react';
import BoxFourIcon from '@/components/icons/product/boxFourIcon';
import RowFourIcon from '@/components/icons/product/rowFourIcon';
import RowOneIcon from '@/components/icons/product/rowOneIcon';
import SortIcon from '@/components/icons/product/sortIcon';
import { ProductType } from '@/types/product/productsType';
import ProductImageOnly from './ProductImageOnly';
import ProductTwoList from './ProductTwoList';
import ProductCardList from './ProductCardList';

const filters = [
  '할인/혜택',
  '가격',
  '시즌',
  '색상',
  '사이즈',
  '브랜드',
  '소재',
  '길이',
  '핏',
];
function ProductList({
  getProductList,
  onOpenModal,
}: {
  getProductList: ProductType[];
  onOpenModal: () => void;
}) {
  const [layoutMode, setLayoutMode] = useState('grid-cols-2');

  const toggleLayoutMode = () => {
    if (layoutMode === 'grid-cols-2') {
      setLayoutMode('grid-cols-1');
    } else if (layoutMode === 'grid-cols-1') {
      setLayoutMode('grid-cols-4');
    } else {
      setLayoutMode('grid-cols-2');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-4 p-[0px_16px_0px_20px]">
        <h1 className="text-xl font-bold font-RBC-H">All Product</h1>
        <div className="flex">
          <button onClick={onOpenModal}>
            <SortIcon />
          </button>
          <button onClick={toggleLayoutMode}>
            {layoutMode === 'grid-cols-2' && <RowFourIcon />}
            {layoutMode === 'grid-cols-1' && <RowOneIcon />}
            {layoutMode === 'grid-cols-4' && <BoxFourIcon />}
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 p-4">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="flex-shrink-0 h-[40px] p-[11px_12px_10px] text-sm border border-gray-300 text-si-131922 whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${layoutMode} gap-2 p-[0px_16px]`}>
        {getProductList.map((product, index) =>
          layoutMode === 'grid-cols-4' ? (
            <ProductImageOnly key={product.id} product={product} />
          ) : layoutMode === 'grid-cols-2' ? (
            <ProductTwoList
              key={product.id}
              product={product}
              // isLiked={likedProducts[product.id]}
              // toggleLike={toggleLike}
            />
          ) : (
            <ProductCardList
              key={product.id}
              product={product}
              // isLiked={likedProducts[product.id]}
              // toggleLike={toggleLike}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductList;
