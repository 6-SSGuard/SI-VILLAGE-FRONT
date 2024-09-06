'use client';
import { cartMenuData } from '@/datas/cartMenuData';
import CartMenuItem from './CartMenuItem';
import React, { useState } from 'react';

function CartMyNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="cartHeaderMenu">
      <nav>
        <ul
          className={`
          grid grid-cols-3 bg-[#f0f0f0] py-3 overflow-hidden px-8 transition-all
          ${isOpen ? 'h-[80px]' : 'h-[45px]'}`}
        >
          {cartMenuData &&
            cartMenuData.map((menu) => (
              <CartMenuItem key={menu.id} menu={menu} isOpen={isOpen} />
            ))}
        </ul>

        <div className="w-full flex justify-center items-center">
          <button
            className="relative w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-[#f0f0f0]"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>
      </nav>
    </section>
  );
}

export default CartMyNav;
