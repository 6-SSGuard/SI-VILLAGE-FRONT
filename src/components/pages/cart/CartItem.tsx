import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// CartItem 컴포넌트 타입 정의
interface CartItemProps {
  productCode: string;
}

interface ProductInfo {
  id: number;
  title: string;
  content: string;
  image: string;
  price: number;
  stock: number;
  point: number;
}

// CartItem 컴포넌트
const CartItem = ({ productCode }: CartItemProps) => {
  const [productData, setProductData] = useState<ProductInfo | null>(null);
  const [thumbnail, setThumbnail] = useState<string>('');
  useEffect(() => {
    // 상품 정보를 가져오는 API 호출
    const fetchProductData = async () => {
      try {
        // productCode를 이용해 상품 정보 API 호출 (예시로 fetch 사용)
        const response = await fetch(
          `${process.env.API_BASE_URL}/api/product/details/${productCode}`
        );
        const data = await response.json();
        setProductData(data.result);
      } catch (error) {
        console.error('상품 정보를 가져오는 중 오류 발생:', error);
      }
    };

    // const fetchProductthumbnail = async () => {
    //   try {
    //     // productCode를 이용해 상품 정보 API 호출
    //     const response = await fetch(
    //       `${process.env.API_BASE_URL}/api/product/image/brief/thumbnail/${productCode}`
    //     );
    //     const data = await response.json();
    //     setProductData(data.result);
    //   } catch (error) {
    //     console.error('상품 이미지를 가져오는 중 오류 발생:', error);
    //   }
    // };

    fetchProductData();
  }, [productCode]);

  if (!productData) {
    return <div>Loading...</div>; // 데이터를 가져오는 동안 로딩 표시
  }

  return (
    <div className="flex w-full h-[340px] ml-7">
      {/* 상품 이미지 */}
      <div className="flex flex-col items-center">
        <Image
          className="w-[90px] h-[120px] object-cover"
          src={productData.image}
          alt={productData.content}
          width={80}
          height={120}
        />
        <p className="text-xs mt-3">옵션변경</p>
      </div>

      {/* 상품 정보 */}
      <div className="flex flex-col pl-5 text-sm">
        <div className="w-[252px] h-[36px]">
          <span className="font-bold">{productData.title}</span>
          <p className="text-xs text-gray-500">{productData.content}</p>
        </div>

        <div className="flex justify-between items-center font-bold mt-16">
          <p className="text-end">
            {productData?.price !== undefined
              ? productData.price.toLocaleString() + '원'
              : '가격 정보 없음'}
          </p>

          <div className="flex items-center">
            <button className="border w-[24px] h-[24px]">-</button>
            <input
              type="text"
              value={1} // 수량 조절 가능하게 수정 가능
              className="border w-[40px] h-[24px] text-center text-sm"
              readOnly
            />
            <button className="border w-[24px] h-[24px]">+</button>
          </div>
        </div>

        <div className="flex py-5 mt-3 border-t border-gray-200">
          <span className="w-[20px] h-[16px] bg-gray-100 text-xs text-center">
            s.l.
          </span>
          <p className="ml-3 text-xs text-gray-500">
            {productData.point}p 적립
          </p>
        </div>

        <div className="text-xs text-nowrap text-gray-500 py-3">
          20시30분까지 결제 시{' '}
          <span className="text-orange-300">오늘 출발</span>
        </div>

        <button className="border border-gray-200 text-xs mt-3 py-1 px-2">
          5% 쿠폰
        </button>
        <p className="text-xs text-gray-500 py-3">사용가능 쿠폰</p>
        <button className="border border-gray-200 py-4 mt-3 w-full">
          바로 구매
        </button>
      </div>
    </div>
  );
};

export default CartItem;
