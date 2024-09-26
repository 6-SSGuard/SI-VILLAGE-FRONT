import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  deleteCartById,
  increaseCartItem,
  toggleCartItem,
} from '@/actions/cart/cartActions';

// CartItem 컴포넌트 타입 정의
interface CartItemProps {
  cartId: number;
  productCode: string;
  quantity: number;
  selected: boolean;
}

interface ProductInfo {
  productCode: string;
  productName: string;
  price: number;
  brandEngName: string;
  colorId: number;
  detailContent: string;
}

interface ThumbnailType {
  thumbnailUrl: string;
}

// CartItem 컴포넌트
const CartItem = ({
  cartId,
  productCode,
  quantity: initialQuantity,
  selected: initialSelected,
}: CartItemProps) => {
  const [productData, setProductData] = useState<ProductInfo | null>(null);
  const [thumbnail, setThumbnail] = useState<ThumbnailType>({
    thumbnailUrl: '',
  });
  const [selected, setSelected] = useState(initialSelected);
  const [quantity, setQuantity] = useState(initialQuantity);
  console.log(selected);

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

    const fetchProductthumbnail = async () => {
      try {
        const response = await fetch(
          `${process.env.API_BASE_URL}/api/product/image/brief/thumbnail/${productCode}`
        );
        const data = await response.json();

        setThumbnail(data.result);
      } catch (error) {
        console.error('상품 이미지를 가져오는 중 오류 발생:', error);
      }
    };

    fetchProductData();
    fetchProductthumbnail();
  }, [productCode]);

  const handleCheckboxChange = async () => {
    try {
      const toggled = await toggleCartItem(cartId);
      setSelected(toggled);
    } catch (error) {
      console.error('카트 아이템 토글 중 오류 발생:', error);
    }
  };

  const handleDecreaseQuantity = async () => {
    if (quantity > 1) {
      try {
        const newQuantity = quantity - 1;
        await increaseCartItem(cartId, newQuantity);
        setQuantity(newQuantity);
      } catch (error) {
        console.error('수량 감소 중 오류 발생:', error);
      }
    }
  };

  const handleIncreaseQuantity = async () => {
    try {
      const newQuantity = quantity + 1;
      await increaseCartItem(cartId, newQuantity);
      setQuantity(newQuantity);
    } catch (error) {
      console.error('수량 증가 중 오류 발생:', error);
    }
  };

  const handleDeleteCartItem = async () => {
    try {
      await deleteCartById(cartId);
      // 성공적으로 삭제되면 UI에서 해당 항목을 제거할 수 있도록 추가 처리가 필요할 수 있음
      console.log('Cart item deleted successfully');
    } catch (error) {
      console.error('카트 아이템 삭제 중 오류 발생:', error);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full border-b border-gray-200 p-[34px_24px_32px_24px]">
      {/* 상단 브랜드 및 제품명 */}
      <div className="flex items-center justify-between space-x-3 mb-3">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-black"
          />
          <span className="font-bold text-sm">
            <span className="mr-1">{productData.brandEngName}</span>
            {productData.productName}
          </span>
        </div>
        <button
          onClick={handleDeleteCartItem}
          className="text-gray-400 hover:text-black"
        >
          X
        </button>
      </div>

      {/* 상품 이미지 및 정보 섹션 */}
      <div className="flex w-full">
        {/* 상품 이미지 */}
        <div className="w-1/4 flex items-center justify-center">
          <div>
            <Image
              className="w-[100px] h-[150px] object-cover"
              src={thumbnail.thumbnailUrl}
              alt="상품 이미지"
              width={100}
              height={150}
            />
            <p className="text-xs mt-3 text-center text-si-text-gray">
              구성변경
            </p>
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="w-3/4 pl-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-bold">
              {productData?.price !== undefined
                ? productData.price.toLocaleString() + '원'
                : '가격 정보 없음'}
            </p>
            <div className="flex items-center">
              <button
                className="border h-6 px-2 text-sm"
                onClick={handleDecreaseQuantity}
                disabled={quantity === 1}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="border w-[40px] h-6 text-center"
                readOnly
              />
              <button
                className="border px-2 h-6 text-sm"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* 적립 포인트 */}
          <div className="flex items-center py-3 border-t border-gray-200 text-sm">
            <span className="w-[20px] h-[20px] bg-gray-100 text-center text-xs flex items-center justify-center">
              s.l.
            </span>
            <p className="ml-3 text-gray-500">
              {(productData.price * 0.01).toFixed(0)}p 적립
            </p>
          </div>

          {/* 배송 안내 */}
          <div className="text-sm text-gray-500 mb-3">
            20시30분까지 결제 시{' '}
            <span className="text-orange-400 font-bold">오늘 출발</span>
          </div>

          {/* 쿠폰 및 바로 구매 버튼 */}
          <div className="flex items-center space-x-2">
            <button className="border border-gray-300 text-sm px-3 py-1">
              5% 쿠폰
            </button>
            <p className="text-sm text-gray-500">사용가능 쿠폰</p>
          </div>

          {/* 바로 구매 버튼 */}
          <button className="mt-3 border border-[#e0e0e0] text-[#333333] py-2 px-4 w-full text-sm">
            바로 구매
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
