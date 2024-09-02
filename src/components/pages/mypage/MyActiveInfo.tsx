import React from 'react';
import ListItem from './ListItem';

export default function MyActiveInfo() {
  const items = [
    { text: '상품문의', href: '#' },
    { text: '1:1문의내역', href: '#' },
    { text: '이벤트 참여내역', href: '#' },
    { text: '친구추천', href: '#' },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md text-sm">
      <strong className="block font-bold mb-4 border-b border-black">
        나의 활동정보
      </strong>
      <ul className="space-y-2 font-semibold">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
