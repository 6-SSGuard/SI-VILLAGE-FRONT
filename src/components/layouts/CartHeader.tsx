'use client';
import HomeIcon from '@/components/icons/headerIcon/HomeIcon';
import React, { useEffect, useState } from 'react';
import ArrowLeftIcon from '../icons/common/ArrowLeftIcon';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import TitleHeader from '../ui/TitleHeader';

function CartHeaderNav() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    switch (pathName) {
      case '/order':
        setTitle('주문서');
        break;
      case '/cartmain':
        setTitle('쇼핑백');
        break;
      default:
        setTitle('');
        break;
    }
  }, [pathName]);
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
        <li className="absolute top-3 left-[50%] translate-x-[-50%]">
          <TitleHeader title={title} textStyle="text-lg font-semibold" />
        </li>
      </ul>
    </nav>
  );
}

export default CartHeaderNav;
