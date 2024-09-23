'use client';
import React, { useState, useEffect } from 'react';
import { EventCategoryData } from '@/datas/dummys/eventDatas';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

function EventCategory() {
  const PathName = usePathname();
  const Router = useRouter();
  const [Activity, setActivity] = useState('');

  useEffect(() => {
    if (PathName === '/event' || PathName === '/event/') {
      setActivity('/event');
      Router.replace('/event');
    } else {
      setActivity(PathName);
    }
  }, [PathName, Router]);

  return (
    <div>
      <div className="flex h-36 mt-3">
        <ul className="flex gap-3 pl-8 items-center justify-center">
          {EventCategoryData.map((item, index) => {
            const isActive = PathName === item.url || item.url === Activity;
            return (
              <li key={item.id} className="flex flex-col items-center gap-2">
                <Link href={item.url}>
                  <div
                    className={`w-[72px] h-[72px] rounded-full flex justify-center items-center transition-all duration-300 ${
                      isActive ? 'bg-[#141A23]' : 'bg-[#F8F8F8]'
                    }`}
                    onClick={() => setActivity(item.url)}
                  >
                    {index === 0 ? (
                      <span
                        className={`text-base ${isActive ? 'text-white' : 'text-black'}`}
                      >
                        All
                      </span>
                    ) : (
                      <img
                        src={item.Icon}
                        alt={item.title}
                        className={`w-10 h-10 ${isActive ? 'invert' : ''}`}
                      />
                    )}
                  </div>
                </Link>
                <p className="text-xs mt-3 font-bold">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default EventCategory;
