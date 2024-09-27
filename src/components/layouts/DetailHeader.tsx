'use client';
import React, { useEffect, useState } from 'react';
import CartArrow from '../icons/headerIcon/cartArrow';
import HomeIcon from '../icons/headerIcon/HomeIcon';
import SearchIcon from '../icons/common/SearchIcon';
import ShoppingBagIcon from '../icons/common/ShoppingBagIcon';
import Link from 'next/link';
import { getCartItemCount } from '@/actions/cart/cartActions';

function DetailHeader() {
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  useEffect(() => {
    const fetchCartItemCount = async () => {
      const count = await getCartItemCount();
      setCartItemCount(count.quantity);
    };

    fetchCartItemCount();
  }, []);
  return (
    <nav id="cartHeader" className="px-4 py-2">
      <ul className="grid grid-cols-2 items-center justify-between">
        <ul className="overflow-hidden flex ">
          <li>
            <CartArrow />
          </li>
          <li className="pl-5">
            <HomeIcon />
          </li>
        </ul>

        <ul className="flex justify-end">
          <li className="pr-4">
            <SearchIcon />
          </li>
          <li className="relative">
            <Link href="cartmain">
              <ShoppingBagIcon />
            </Link>
            {cartItemCount > 0 && (
              <span className="absolute top-[-4px] right-[-8px] bg-[#D99C63] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default DetailHeader;
