'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function CartBottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center fixed bottom-0 bg-white ">
      {/* shopping bag 버튼 */}
      <div className="relative w-full shadow-lg flex justify-center ">
        <div className="absolute -top-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              width={66}
              height={8}
              src="/shoppingBagTabCloseWhiteUP.png"
              alt="shoppingBag"
            />
            {/* 버튼의 상태에 따라 화살표 방향 변경 */}
          </button>
        </div>
      </div>

      {/* transition 적용되는 레이아웃 */}
      <ul
        className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'w-full h-[60px]' : 'w-full h-0'}`}
      >
        <div className="flex-col borderborder-gray-200 ">
          <div className="flex items-center mt-2 shadow-2xl justify-center ">
            <p className="text-center text-xs mr-24">총 상품금액</p>
            <p className="text-xs">배송비</p>
          </div>

          <div className="flex items-center">
            <p className="text-center text-xs pl-32">0원</p>
            <p className="mb-1 pl-12">+</p>
            <p className="text-xs text-center pl-16">0원</p>
          </div>
        </div>
      </ul>

      {/* 선물하기, 주문하기 버튼 */}
      <div className="w-full flex h-14 items-end bg-white border border-gray-200 shadow-lg">
        <button className="w-2/5 h-12 border border-gray-100">선물하기</button>
        <button className="w-3/5 h-12 bg-black text-white">0원 주문하기</button>
      </div>
    </div>
  );
}

export default CartBottomNav;
