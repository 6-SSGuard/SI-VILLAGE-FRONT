'use client';
import React, { useState } from 'react';

function CartBottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center fixed bottom-0 bg-white border-grar-100 border-t shadow-2xl">
      <div className="relative w-full flex justify-center mb-2 border border-gray-200">
        <ul
          className={`
          overflow-hidden transition-all
          ${isOpen ? 'h-[45px]' : 'h-[5px]'}`}
        >
          <div className="flex-col">
            <div className="flex justify-between items-center mt-2">
              <p className="text-center text-xs mr-32">총 상품금액</p>{' '}
              <p className="text-xs">배송비</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-center text-xs ml-5">0원</p>
              <p className="mb-1">+</p>
              <p className="text-xs text-center mr-2">0원</p>
            </div>
          </div>
        </ul>
        <button
          className="absolute w-0 h-0 border-l-[20px] text-center mt-1 border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-white -top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          ^
        </button>
      </div>

      <div className="w-full flex h-14 items-end">
        <button className="w-2/5 h-14 border border-gray-100">선물하기</button>
        <button className="w-3/5 h-14 bg-black text-white">0원 주문하기</button>
      </div>
    </div>
  );
}

export default CartBottomNav;
