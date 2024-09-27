'use client';
import React, { useState } from 'react';
import BoxFourIcon from '@/components/icons/product/boxFourIcon';
import RowFourIcon from '@/components/icons/product/rowFourIcon';
import RowOneIcon from '@/components/icons/product/rowOneIcon';
import SortIcon from '@/components/icons/product/sortIcon';
import ProductSortModal from './ProductSortModal';

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

function ProductSortHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [layoutMode, setLayoutMode] = useState('grid-cols-2');
  const [likedProducts, setLikedProducts] = useState<{
    [key: number]: boolean;
  }>({});

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
    <div className="flex justify-between items-center mt-4 p-[0px_16px_0px_24px]">
      <h1 className="text-xl font-bold font-RBC-H">All Product</h1>
      <div className="flex">
        <button onClick={openModal}>
          <SortIcon />
        </button>

        <button onClick={toggleLayoutMode}>
          {layoutMode === 'grid-cols-2' && <RowFourIcon />}
          {layoutMode === 'grid-cols-1' && <RowOneIcon />}
          {layoutMode === 'grid-cols-4' && <BoxFourIcon />}
        </button>
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
      <ProductSortModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ProductSortHeader;
