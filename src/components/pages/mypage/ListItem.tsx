import React from 'react';
import ArrowBigRight from '@/components/icons/common/ArrowBigRight';

function ListItem({ text, href }: { text: string; href: string }) {
  return (
    <li className="border-b border-gray-200 pb-2">
      <a href={href} className="flex justify-between items-center">
        <span>{text}</span>
        <ArrowBigRight />
      </a>
    </li>
  );
}

export default ListItem;
