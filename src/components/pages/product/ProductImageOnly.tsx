'use client';
import {
  getProductCode,
  getProductCodeBythumnailImage,
} from '@/actions/productDetailActionHook';
import { breifProductReq } from '@/types/detail/detailproductinfo';
import { ProductType } from '@/types/product/productsType';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ThumbnailType } from '../cart/CartItem';

function ProductImageOnly({ product }: { product: ProductType }) {
  const [productData, setProductData] = useState<breifProductReq | null>(null);
  const [thumbnail, setThumbnail] = useState<ThumbnailType>({
    thumbnailUrl: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductCode(product.id);
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsLoading(false);
      }
    };
    const fetchProductthumbnail = async () => {
      try {
        const data = await getProductCodeBythumnailImage(product.id);

        setThumbnail(data);
      } catch (error) {
        console.error('상품 이미지를 가져오는 중 오류 발생:', error);
      }
    };
    fetchProductthumbnail();
    fetchProduct();
  }, [product.id]);
  return (
    <div className="w-[86px] h-[130px] flex justify-center items-center">
      {thumbnail?.thumbnailUrl ? (
        <Image
          src={thumbnail.thumbnailUrl}
          alt={product.id}
          className="w-auto h-auto max-h-full max-w-full"
          width={100}
          height={150}
        />
      ) : (
        <div>이미지 없음</div>
      )}
    </div>
  );
}

export default ProductImageOnly;
