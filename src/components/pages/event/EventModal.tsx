'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { EventBrandDataType } from '@/types/event/eventType';
import EventModalCard from './EventModalCard';

const EventMainData = [
  { id: 1, label: '신상품', checked: false, category: '신상품' },
  { id: 2, label: '할인', checked: false, category: '할인' },
  { id: 3, label: '신규회원', checked: false, category: '신규회원' },
  { id: 4, label: '페이백', checked: false, category: '페이백' },
  { id: 5, label: '결제혜택', checked: false, category: '결제혜택' },
  { id: 6, label: '아울렛', checked: false, category: '아울렛' },
  { id: 7, label: '특가', checked: false, category: '특가' },
  { id: 8, label: '쿠폰', checked: false, category: '쿠폰' },
  { id: 9, label: '사은품', checked: false, category: '사은품' },
  { id: 10, label: '스페셜', checked: false, category: '스페셜' },
];

// 상태를 id에 따라 관리
function BenefitFilterDialog({ data }: { data: EventBrandDataType[] }) {
  const [filters, setFilters] = useState(EventMainData);

  // 체크박스는 id에 따라 상태관리
  const handleCheckboxChange = (id: number) => {
    setFilters((item) =>
      item.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // 초기화
  const resetHandle = () => {
    setFilters((item) =>
      item.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  // 아래 화살표 상태관리
  const [arrowState, setArrow] = useState(false);

  const Handle = () => {
    setArrow(!arrowState);
  };

  return (
    <div className="flex-col w-full h-[400px] bg-white mt-8 overflow-y-auto">
      <span className="text-2xl ml-2">혜택</span>

      {/* 필터바 */}
      <div className="grid grid-cols-2 gap-2 mt-2 px-2">
        {filters.map((filter) => (
          <li key={filter.id} className="flex items-center space-x-3 mt-4">
            <input
              type="checkbox"
              checked={filter.checked}
              onChange={() => handleCheckboxChange(filter.id)}
              className="h-[24px] w-[24px] accent-black"
            />
            <span>{filter.label}</span>
          </li>
        ))}
      </div>

      <div className="mt-8 h-[6px] w-full bg-gray-100"></div>

      <div className="flex flex-col">
        <div className="flex justify-between p-4 mt-4">
          <span className="text-xl">브랜드</span>
          <ChevronDown onClick={Handle} />
        </div>
        {arrowState && <EventModalCard data={data} />}
      </div>

      <div className="sticky bottom-0 flex w-full bg-white p-4 shadow-md">
        <button
          onClick={resetHandle}
          className="w-1/2 bg-gray-400 text-white py-2 rounded mr-2"
        >
          초기화
        </button>
        <button className="w-1/2 bg-black text-white py-2 rounded">적용</button>
      </div>
    </div>
  );
}

export default BenefitFilterDialog;
