import React from 'react';
import ListItem from './ListItem';

interface InfoListProps {
  title: string;
  items: { text: string; href: string }[];
}

const MypageInfoList: React.FC<InfoListProps> = ({ title, items }) => {
  return (
    <div className="bg-white px-6 mb-6">
      <strong className="block text-sm font-bold mb-1 border-b border-black leading-10">
        {title}
      </strong>
      <ul className="text-si-131922 leading-10">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default MypageInfoList;
