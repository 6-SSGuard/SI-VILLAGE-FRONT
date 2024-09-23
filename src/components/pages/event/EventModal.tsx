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
      <div className="grid grid-cols-2 gap-2 mt-2 justify-start px-2">
        {filters.map((filter) => (
          <li
            key={filter.id}
            className="flex items-center space-x-3 mt-4 w-[176px] h-[24px]"
          >
            <input
              type="checkbox"
              checked={filter.checked}
              onChange={() => handleCheckboxChange(filter.id)}
              className=" border border-white h-[24px] w-[24px] accent-black text-black "
            />
            <span className="font-sans">{filter.label}</span>
          </li>
        ))}
      </div>

      <div className="mt-8 h-[6px] w-full bg-gray-100"></div>

      <div className="flex flex-col">
        {/* 브랜드 상단 바*/}
        <div className="flex justify-between p-4 mt-4">
          <div>
            <span className="text-xl">브랜드</span>
          </div>
          <div>
            <ChevronDown onClick={Handle} />
          </div>
        </div>
        {/* 화살표 버튼이 true되면 열림 */}
        {arrowState && <EventModalCard data={data} />}
      </div>

      {/* 고정된 하단 네비게이션 바 */}
      <div className="sticky bottom-0 left-0 right-0 flex w-full bg-white p-4 shadow-md ">
        <div className="w-1/2 pr-2">
          <button
            onClick={resetHandle}
            className="bg-gray-400 w-full text-white py-2 rounded"
          >
            초기화
          </button>
        </div>
        <div className="w-1/2 pl-2">
          <button className="bg-black w-full text-white py-2 rounded">
            적용
          </button>
        </div>
      </div>
    </div>
  );
}

export default BenefitFilterDialog;
