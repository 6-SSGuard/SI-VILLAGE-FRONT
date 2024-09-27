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

function ProductTwoList({
  product,
  // isLiked,
  toggleLike,
}: {
  product: ProductType;
  // isLiked: boolean;
  toggleLike: (id: number) => void;
}) {
  const [productData, setProductData] = useState<breifProductReq | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState<ThumbnailType>({
    thumbnailUrl: '',
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductCode(product.id);
        // console.log('ok??', data);
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
  }, []);

  return (
    <div className="relative">
      <div className="w-[170px] h-[250px] flex justify-center items-center">
        <Image
          src={thumbnail.thumbnailUrl}
          alt={product.id}
          className="w-auto h-auto max-h-full max-w-full"
          width={200}
          height={300}
        />
      </div>
      <div className="py-4 px-2">
        <p className="text-sm font-semibold mb-[6px]">
          {productData?.brandEngName}
        </p>
        <p className="text-xs text-[#404040] mb-[2px]">
          {productData?.productName}
        </p>
        <p className="text-[#404040] text-xs">
          {productData?.price.toLocaleString()}
        </p>
      </div>
      {/* <div className="absolute top-2 right-2">
        <button onClick={() => toggleLike(product.id)}>
          {isLiked ? (
            <Image
              src="https://ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com/blackheart.png"
              alt="black heart"
              width={24}
              height={24}
            />
          ) : (
            <Image src="/images/heart.png" alt="heart" width={24} height={24} />
          )}
        </button>
      </div> */}
    </div>
  );
}

export default ProductTwoList;
