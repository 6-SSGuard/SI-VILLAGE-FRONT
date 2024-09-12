'use client';
import React, { createElement } from 'react';
import { CategoryData } from '@/datas/bestDatas';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function BestCategoryList() {
  const PathName = usePathname();

  return (
    <div className="flex bg-red200 h-36 py-1 pl-6">
      <ul className="flex gap-6 pl-8 items-center justify-center">
        {CategoryData.map((item) => (
          <Link href={item.url} key={item.id}>
            <li className="flex flex-col items-center justify-center gap-2">
              <div
                className={`
                  ${PathName === item.url ? 'bg-[#141A23]' : 'bg-[#F8F8F8]'}
                  w-[72px] h-[72px] rounded-full flex justify-center items-center
                  transition-all duration-300
                  `}
              >
                {createElement(item.Icon, {
                  color: PathName === item.url ? '#fff' : '#141A23',
                  className: 'transition-all duration-300',
                })}
              </div>

              <p className="text-xs mt-3 font-bold ">{item.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BestCategoryList;
