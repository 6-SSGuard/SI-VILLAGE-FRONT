import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Image from 'next/image';
import { CartProductDataType } from '@/types/cart/cartTypes';
function CartProductListPage({
  cartListData,
  isOpen,
}: {
  cartListData: CartProductDataType[];
  isOpen: boolean;
}) {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="flex-col">
      {/* 경계선 */}
      <div className="w-full h-2 bg-gray-200"></div>

      {cartListData.map((item) => (
        <>
          <div key={item.id} className="flex items-center p-6 ml-1">
            {/* 왼쪽 체크박스 */}
            <input
              type="checkbox"
              className=" mr-2 w-[24px] h-[24px]"
              checked={isOpen}
            />

            {/* 상품 정보 */}
            <div className="flex-1 text-sm py-4">
              <span className="font-bold">{item.Product_title}</span>
              {item.Product_content}
            </div>

            {/* 오른쪽 삭제 버튼 */}
            <button className="ml-2">
              <img
                src="/close.png"
                alt="delete 버튼"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
          <div className="flex w-full h-[340px] ml-7">
            <div className="flex flex-col items-center">
              <Image
                className="w-[90px] h-[120px] object-cover"
                src={item.Product_image}
                alt={item.Product_content}
                width={80}
                height={120}
              />
              <p className="text-xs mt-3">옵션변경</p>
            </div>

            <div className="flex flex-col pl-5 text-sm">
              {/* 제품명 */}
              <div className="w-[252px] h-[36px]">
                <p className="text-xs text-gray-500">
                  {item.Product_infoDatail}
                </p>
              </div>

              <div className="flex justify-between items-center font-bold mt-16">
                <p className="text-end">
                  {item.Product_Price.toLocaleString('ko-KR')}원
                </p>

                <div className="flex items-center">
                  <button className="border w-[24px] h-[24px]">-</button>
                  <input
                    type="text"
                    value={item.Product_choiceNum}
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
                <p className="ml-3 text-xs text-gray-500">1400p 적립</p>
              </div>

              <div className="text-xs text-nowrap text-gray-500 py-3">
                20시30분까지 결제 시
                <span className="text-orange-300"> 오늘 출발</span>
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
          <div className="pt-6 border-b-1 border-gray-200 py-6"> </div>
        </>
      ))}
    </div>
  );
}

export default CartProductListPage;
