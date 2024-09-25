'use client';
import React, { useState } from 'react';

function EventFilterCustom() {
  const bestButtonCategoryData = [
    { id: 1, title: '전체' },
    { id: 2, title: '뷰티' },
    { id: 3, title: '여성의류' },
    { id: 4, title: '남성의류' },
    { id: 5, title: '백' },
    { id: 6, title: '슈즈' },
    { id: 7, title: '액세서리' },
    { id: 8, title: '스포트/레저' },
    { id: 9, title: '골프' },
    { id: 10, title: '키즈' },
    { id: 11, title: '라이프' },
  ];

  const [activeTab, setActiveTab] = useState('전체');

  return (
    <div className="flex w-full h-auto relative pl-5 pr-10 overflow-x-auto mt-6">
      <div className="flex gap-1 w-full whitespace-nowrap overflow-x-auto scrollbar-hide">
        <ul className="flex gap-1 h-full ">
          {bestButtonCategoryData.map((item) => (
            <li key={item.id} className="inline-block">
              <button
                className={`border text-sm px-4 py-3 ${
                  activeTab === item.title
                    ? 'bg-[#141A23] text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => setActiveTab(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventFilterCustom;
