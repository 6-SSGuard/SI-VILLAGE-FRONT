import CartArrow from '@/components/icons/headerIcon/cartArrow';
import HomeIcon from '@/components/icons/headerIcon/HomeIcon';
import React from 'react';
import ArrowLeftIcon from '../icons/common/ArrowLeftIcon';

function CartHeaderNav() {
  return (
    <nav id="cartHeader" className="px-4 py-4">
      <ul className="grid grid-cols-10 items-center">
        <li className="col-span-2 overflow-hidden">
          <ul className="flex flex-row justify-between items-center">
            <li>
              <ArrowLeftIcon />
            </li>
            <li>
              <HomeIcon />
            </li>
          </ul>
        </li>
        <li className="col-span-6 text-center text-[1.15rem]">쇼핑백</li>
        <li className="col-span-2"></li>
      </ul>
    </nav>
  );
}

export default CartHeaderNav;
