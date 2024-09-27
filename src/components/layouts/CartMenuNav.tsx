'use client';
import { cartMenuData } from '@/datas/dummys/cartMenuData';
import CartMenuItem from './CartMenuItem';
import React, { useState } from 'react';
import CartTabDownIcon from '../icons/common/CartTabDownIcon';
import CartTabUpIcon from '../icons/common/CartTabUpIcon';

function CartMyNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="cartHeaderMenu">
      <nav>
        <ul
          className={`
          grid grid-cols-3 bg-[#f0f0f0] py-3 overflow-hidden px-8 transition-all text-[#404040]
          ${isOpen ? 'h-[80px]' : 'h-[45px]'}`}
        >
          {cartMenuData &&
            cartMenuData.map((menu) => (
              <CartMenuItem key={menu.id} menu={menu} isOpen={isOpen} />
            ))}
        </ul>

        <div className="w-full flex justify-center items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <CartTabDownIcon /> : <CartTabUpIcon />}
          </button>
        </div>
      </nav>
    </section>
  );
}

export default CartMyNav;
