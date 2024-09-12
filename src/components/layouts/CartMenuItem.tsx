'use client';
import { cartMenuType } from '@/types/cart/cartTypes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function CartMenuItem({
  menu,
  isOpen,
}: {
  menu: cartMenuType;
  isOpen: boolean;
}) {
  const [valueType, setValueType] = useState('');
  const [value, setValue] = useState(0);

  const valueChecker = (link: string) => {
    switch (link) {
      case '/mypage/point':
        setValueType('P');
        break;

      case '/mypage/e-point':
        setValueType('P');
        break;

      case '/mypage/coupon':
        setValueType('장');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    valueChecker(menu.link);
  });

  return (
    <Link href={menu.link} key={menu.id}>
      <li
        key={menu.id}
        className={`${menu.id == 3 ? ' ' : 'border-r-[1px] text-sm'} text-center text-[0.9rem] font-light text-sm transition-all`}
      >
        {menu.name}

        <p className={`${isOpen ? 'block' : 'hidden'} text-sm font-bold`}>
          {value}
          {valueType}
        </p>
      </li>
    </Link>
  );
}

export default CartMenuItem;
