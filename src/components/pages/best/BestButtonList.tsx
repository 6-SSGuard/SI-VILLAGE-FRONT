'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BestMain from './BestMain';
import { bestCreateDataType } from '@/types/best/bestTypes';

function BestPage({ data }: { data: bestCreateDataType[] }) {
  const [ActivityTab, setActiveTab] = useState('전체');
  const [isOpen, setIsOpen] = useState(false);

  // 필터 데이터
  const FilterData =
    ActivityTab === '전체'
      ? data
      : data.filter((item) => item.category === ActivityTab);

  // 버튼 카테고리 데이터
  const BestButtonCategoryData = [
    {
      id: 1,
      title: '전체',
      component: <BestMain data={data} />,
    },
    {
      id: 2,
      title: '뷰티',
      component: <BestMain data={FilterData} />,
    },
    {
      id: 3,
      title: '여성의류',
      component: <BestMain data={FilterData} />,
    },
    {
      id: 4,
      title: '남성의류',
      component: <BestMain data={FilterData} />,
    },
    {
      id: 5,
      title: '백',
      component: <BestMain data={FilterData} />,
    },
    { id: 6, title: '슈즈', component: <BestMain data={FilterData} /> },
    { id: 7, title: '액세서리', component: <BestMain data={FilterData} /> },
    { id: 8, title: '스포트/레저', component: <BestMain data={FilterData} /> },
    { id: 9, title: '골프', component: <BestMain data={FilterData} /> },
    { id: 10, title: '키즈', component: <BestMain data={FilterData} /> },
    { id: 11, title: '라이프' },
  ];

  return (
    <div className="flex flex-col w-full pl-6">
      {/* 필터바와 V 버튼을 포함하는 컨테이너 */}
      <div className="relative bg-white z-20">
        <div className=" items-center w-full relative">
          {/* 필터바 */}
          <div className="flex w-full whitespace-nowrap overflow-x-hidden">
            <ul
              className={`${
                isOpen
                  ? ' gap-1 flex flex-wrap h-[160px]'
                  : 'flex overflow-auto'
              }  scrollbar-hide gap-1`}
            >
              {BestButtonCategoryData.map((item) => (
                <li key={item.id} className="inline-block ">
                  <button
                    className={`border ${
                      ActivityTab === item.title
                        ? 'bg-[#141A23] text-white'
                        : 'bg-white text-black'
                    } text-sm px-4 py-3`}
                    onClick={() => setActiveTab(item.title)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center ml-4 w-[38px] h-[38px]">
              <Button onClick={() => setIsOpen(!isOpen)}>V</Button>
            </div>
          </div>
          {/* V 버튼 */}
        </div>

        <div className="">
          {
            BestButtonCategoryData.find((item) => item.title === ActivityTab)
              ?.component
          }
        </div>
      </div>
    </div>
  );
}

export default BestPage;
