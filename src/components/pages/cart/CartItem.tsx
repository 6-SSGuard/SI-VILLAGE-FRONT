import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  deleteCartById,
  increaseCartItem,
  toggleCartItem,
} from '@/actions/cart/cartActions';
import {
  getProductCodeByDetailInfo,
  getProductCodeBythumnailImage,
} from '@/actions/productDetailActionHook';
import CloseIcon from '@/components/icons/common/CloseIcon';

// CartItem 컴포넌트 타입 정의
interface CartItemProps {
  cartId: number;
  productCode: string;
  quantity: number;
  selected: boolean;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

interface ProductInfo {
  productCode: string;
  productName: string;
  price: number;
  brandEngName: string;
  colorId: number;
  detailContent: string;
}

interface ProductOptionType {
  options: ProductOption[];
}

interface ProductOption {
  productOptionId: number;
  sizeId: null | number;
  volume: string;
  stock: number;
}

interface ThumbnailType {
  thumbnailUrl: string;
}

// CartItem 컴포넌트
const CartItem = ({
  cartId,
  productCode,
  quantity: initialQuantity,
  selected,
  total,
  setTotal,
}: CartItemProps) => {
  const [productData, setProductData] = useState<ProductInfo>();
  const [productOption, setProductOption] = useState<ProductOptionType | null>(
    null
  );
  const [thumbnail, setThumbnail] = useState<ThumbnailType>({
    thumbnailUrl: '',
  });
  // const [selected, setSelected] = useState(initialSelected);
  const [quantity, setQuantity] = useState(initialQuantity);
  // console.log(selected);

  const fetchProductData = async () => {
    try {
      const data = await getProductCodeByDetailInfo(productCode);
      setProductData(data);
      if (selected) {
        setTotal(data.price * quantity + total);
      }
    } catch (error) {
      console.error('상품 정보를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    // 상품 정보를 가져오는 API 호출
    const fetchProductthumbnail = async () => {
      try {
        const data = await getProductCodeBythumnailImage(productCode);

        setThumbnail(data);
      } catch (error) {
        console.error('상품 이미지를 가져오는 중 오류 발생:', error);
      }
    };

    const fetchProductOption = async () => {
      try {
        const response = await fetch(
          `${process.env.API_BASE_URL}/api/product/option/details/${productCode}`
        );
        const data = await response.json();

        setProductOption({ options: data.result });
      } catch (error) {
        console.error('상품 옵션를 가져오는 중 오류 발생:', error);
      }
    };

    fetchProductOption();
    fetchProductData();
    fetchProductthumbnail();
  }, [productCode]);

  const handleCheckboxChange = async () => {
    await toggleCartItem(cartId);
  };

  const handleDecreaseQuantity = async (price: number) => {
    if (quantity > 1) {
      try {
        const newQuantity = quantity - 1;
        setTotal(total - price);
        await increaseCartItem(cartId, newQuantity);
        setQuantity(newQuantity);
      } catch (error) {
        console.error('수량 감소 중 오류 발생:', error);
      }
    }
  };

  const handleIncreaseQuantity = async (price: number) => {
    try {
      const newQuantity = quantity + 1;
      setTotal(price + total);

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
          <CloseIcon />
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
          <div className="text-xs text-si-787878">
            {productOption?.options.map((option) => (
              <div key={option.productOptionId}>{option.volume}</div>
            ))}
          </div>
          <div className="flex justify-between items-center my-6">
            <p className="font-bold">
              {productData?.price !== undefined
                ? (productData.price * quantity).toLocaleString() + '원'
                : '가격 정보 없음'}
            </p>
            <div className="flex items-center">
              <button
                className="border h-6 px-2 text-sm"
                onClick={() => handleDecreaseQuantity(productData.price)}
                disabled={quantity === 1}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="border w-[40px] h-6 text-center text-sm"
                readOnly
              />
              <button
                className="border px-2 h-6 text-sm"
                onClick={() => handleIncreaseQuantity(productData.price)}
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
            <p className="ml-3 text-gray-500 text-xs">
              {(productData.price * quantity * 0.005).toLocaleString()}p 적립
            </p>
          </div>

          {/* 배송 안내 */}
          <div className="text-xs text-gray-500 mb-3">
            20시30분까지 결제 시{' '}
            <span className="text-orange-400 font-bold">오늘 출발</span>
          </div>

          {/* 쿠폰 및 바로 구매 버튼 */}
          <div className="flex items-center space-x-2">
            <button className="border border-gray-300 text-sm px-3 py-1">
              5% 쿠폰
            </button>
            <p className="text-xs text-gray-500">사용가능 쿠폰</p>
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
