'use client';
import React, { createElement, useState, useEffect } from 'react';
import { EventCategoryData } from '@/datas/dummys/eventDatas';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

function EventCategort() {
  const PathName = usePathname();
  const Router = useRouter();
  const [Activity, setActivity] = useState('');

  // useEffect(() => {
  //   //현재 라우터가 /best 일경우
  //   if (PathName === '/best' || PathName === '/best/') {
  //     setActivity('/best/popular');
  //     Router.replace('/best/popular');
  //   }

  //   //다른 경로 (most,gift 경로로 바뀔경우)
  //   //그 해당 페이지로 이동
  //   else {
  //     setActivity(PathName);
  //   }
  // }, [PathName, Router]);
  return (
    <div className="flex bg-red200 h-36 py-1 pl-6">
      <ul className="flex gap-6 pl-8 items-center justify-center">
        {EventCategoryData.map((item) => (
          <Link href={item.url} key={item.id}>
            <li className="flex flex-col items-center justify-center gap-2">
              <div
                className={`
                  ${PathName === item.url || item.url === Activity ? 'bg-[#141A23]' : 'bg-[#F8F8F8]'}
                  w-[72px] h-[72px] rounded-full flex justify-center items-center
                  transition-all duration-300
                  `}
                onClick={() => setActivity(item.url)}
              >
                {createElement(item.Icon, {
                  color:
                    PathName === item.url || item.url === Activity
                      ? '#fff'
                      : '#141A23',
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

export default EventCategort;
