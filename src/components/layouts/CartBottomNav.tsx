'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function CartBottomNav({ total }: { total: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center fixed bottom-0 bg-white z-10">
      {/* shopping bag 버튼 */}
      <div className="relative w-full">
        <button
          className="absolute top-[-20px] left-1/2 transform -translate-x-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            width={66}
            height={8}
            src={
              isOpen
                ? '/images/shoppingDown.png'
                : '/shoppingBagTabCloseWhiteUP.png'
            }
            alt="shoppingBag"
          />
        </button>
      </div>

      {/* transition 적용되는 레이아웃 */}
      <div
        className={`
    overflow-hidden transition-all duration-500 ease-in-out 
    ${isOpen ? 'w-full h-[40px]' : 'w-full h-0'}
  `}
      >
        <div className="flex p-1 justify-evenly shadow-xl">
          {/* 총 상품금액과 배송비 라벨 */}
          <div className="flex flex-col items-center">
            <p className="text-center text-xs">총 상품금액</p>
            <p className="text-xs">{total.toLocaleString()}원</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-sm">+</p>
          </div>
          {/* 총 금액과 더하기 아이콘 */}
          <div className="flex flex-col items-center">
            <p className="text-xs">배송비</p>
            <p className="text-xs">0원</p>
          </div>
        </div>
      </div>

      {/* 선물하기, 주문하기 버튼 */}
      <div className="w-full flex items-end bg-white border border-gray-200">
        <button className="w-2/5 h-12 border border-gray-100">선물하기</button>
        <button className="w-3/5 h-12 bg-si-131922 text-white">
          {total.toLocaleString()}원 주문하기
        </button>
      </div>
    </div>
  );
}

export default CartBottomNav;
