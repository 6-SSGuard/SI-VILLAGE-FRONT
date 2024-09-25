'use client';
import HomeIcon from '@/components/icons/headerIcon/HomeIcon';
import React from 'react';
import ArrowLeftIcon from '../icons/common/ArrowLeftIcon';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function CartHeaderNav() {
  const router = useRouter();
  return (
    <nav id="cartHeader" className="p-2">
      <ul className="flex">
        <ul className="flex space-x-2">
          <li>
            <button type="button" onClick={() => router.back()}>
              <ArrowLeftIcon />
            </button>
          </li>
          <li>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </li>
        </ul>
        <li className="absolute left-[50%] translate-x-[-50%] text-lg font-semibold">
          쇼핑백
        </li>
      </ul>
    </nav>
  );
}

export default CartHeaderNav;
