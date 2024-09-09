import React from 'react';
import CartArrow from '../icons/headerIcon/cartArrow';
import HomeIcon from '../icons/headerIcon/HomeIcon';
import SearchIcon from '../icons/common/SearchIcon';
import ShoppingBagIcon from '../icons/common/ShoppingBagIcon';
import Link from 'next/link';

function DetailHeader() {
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
          <li>
            <Link href="cartmain">
              <ShoppingBagIcon />
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default DetailHeader;
