'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { bestCreateDataType } from '@/types/best/bestTypes';
import GiftProduct from './GiftProductPage';
function GiftFilter({ data }: { data: bestCreateDataType[] }) {
  const [activeTab, setActiveTab] = useState('전체');
  const [isOpen, setIsOpen] = useState(false);
  const [FilterData, setFilterData] = useState<bestCreateDataType[]>([]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      const filterData =
        activeTab === '전체'
          ? data
          : data.filter((item) => item.category === activeTab);
      setFilterData(filterData);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab, data]);

  return (
    <div className="flex flex-col w-full  h-auto relative pl-5 pr-4 ">
      <div
        className={` absolute top-0 left-5 right-0 z-20 whitespace-nowrap overflow-x-hidden  ${isOpen ? 'bg-white' : ''}`}
        style={{ height: isOpen ? 'auto' : '48px' }}
      >
        <ul
          className={`flex gap-1 h-full w-[340px]  overflow-x-auto scrollbar-hide   ${isOpen ? 'flex-wrap' : 'overflow-hidden'}`}
        >
          {bestButtonCategoryData.map((item) => (
            <li key={item.id} className="inline-block">
              <button
                className={`border text-sm px-4 py-3 ${activeTab === item.title ? 'bg-[#141A23] text-white' : 'bg-white text-black'}`}
                onClick={() => setActiveTab(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="absolute -top-0 -right-0  flex justify-center items-center w-[38px] h-[38px]">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '▲' : '▼'}
          </Button>
        </div>
      </div>

      <div className="mt-20 overflow-hidden w-full">
        <GiftProduct data={FilterData} />
      </div>
    </div>
  );
}

export default GiftFilter;
