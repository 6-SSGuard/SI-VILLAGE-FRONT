import React from 'react';
import ListItem from './ListItem';

export default function MyShoppingInfo() {
  const items = [
    { text: '주문/배송 조회', href: '#' },
    { text: '오프라인 주문 조회', href: '#' },
    { text: '취소/반품/교환 조회', href: '#' },
    { text: 'Vpay 간편결제 관리', href: '#' },
    { text: '정기배송 조회', href: '#' },
    { text: '선물함', href: '#' },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md text-sm">
      <strong className="block font-bold mb-4 border-b border-black">
        나의 쇼핑정보
      </strong>
      <ul className="space-y-2 font-semibold">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
