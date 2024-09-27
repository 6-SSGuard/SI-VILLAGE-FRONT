'use client';
import React, { useEffect, useState } from 'react';
import BoxFourIcon from '@/components/icons/product/boxFourIcon';
import RowFourIcon from '@/components/icons/product/rowFourIcon';
import RowOneIcon from '@/components/icons/product/rowOneIcon';
import SortIcon from '@/components/icons/product/sortIcon';
import Image from 'next/image';
import ProductSortModal from './ProductSortModal';
import { breifProductReq } from '@/types/detail/detailproductinfo';
import { getProductCode } from '@/actions/productDetailActionHook';
import { ProductType } from '@/types/product/productsType';
import ProductImageOnly from './ProductImageOnly';
import ProductTwoList from './ProductTwoList';
import ProductCardList from './ProductCardList';

const products = [
  {
    id: 1,
    brand: 'MAN ON THE BOON',
    name: 'Product 1',
    price: 10000,
    description: 'Product 1 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/149/240830029980149.jpg?RS=450&SP=1',
  },
  {
    id: 2,
    brand: 'ARMANI EXCHANGE',
    name: 'Product 2',
    price: 20000,
    description: 'Product 2 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/053/240724025224053.jpg?RS=450&SP=1',
  },
  {
    id: 3,
    brand: 'MAN ON THE BOON',
    name: 'Product 3',
    price: 30000,
    description: 'Product 3 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/476/240830029959476.jpg?RS=450&SP=1',
  },
  {
    id: 4,
    brand: 'ARMANI EXCHANGE',
    name: 'Product 4',
    price: 40000,
    description: 'Product 4 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/986/240830029980986.jpg?RS=450&SP=1',
  },
  {
    id: 5,
    brand: 'MAN ON THE BOON',
    name: 'Product 5',
    price: 50000,
    description: 'Product 5 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/449/240830029959449.jpg?RS=450&SP=1',
  },
  {
    id: 6,
    brand: 'ARMANI EXCHANGE',
    name: 'Product 6',
    price: 60000,
    description: 'Product 6 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/435/240830029959435.jpg?RS=450&SP=1',
  },
  {
    id: 7,
    brand: 'MAN ON THE BOON',
    name: 'Product 7',
    price: 70000,
    description: 'Product 7 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/618/240830029980618.jpg?RS=450&SP=1',
  },
  {
    id: 8,
    brand: 'ARMANI EXCHANGE',
    name: 'Product 8',
    price: 80000,
    description: 'Product 8 description',
    imagesrc:
      'https://image.sivillage.com/upload/C00001/s3/goods/org/129/240823028895129.jpg?RS=450&SP=1',
  },
];

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
function ProductList({ getProductList }: { getProductList: ProductType[] }) {
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

  const toggleLike = (productId: number) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId], // Toggle the liked state
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 로딩 중일 때 처리
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // 제품 정보가 없을 때 처리
  // if (!product) {
  //   return <div>Product not found</div>;
  // }
  return (
    <div>
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
              toggleLike={toggleLike}
            />
          ) : (
            <ProductCardList
              key={product.id}
              product={product}
              // isLiked={likedProducts[product.id]}
              toggleLike={toggleLike}
            />
          )
        )}
      </div>

      {/* Render the BottomModal */}
      <ProductSortModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ProductList;
