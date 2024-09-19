'use client';
import { useState, useEffect } from 'react';
import { bestData } from '@/datas/dummys/bestDatas';
import { bestCreateDataType } from '@/types/best/bestTypes';
import MostItem from './MostItem';
interface CategoryType {
  id: number;
  name: string;
}

async function KeywordItem({ item }: { item: CategoryType[] }) {
  const [items, setItems] = useState<bestCreateDataType[]>([]);
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await bestData;
      setItems(data.data);
    };

    fetchData();
  }, []);
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="flex-col items-center justify-between border-b py-10">
      <ul className="mt-4 px-4 pl-8 ">
        {item.map((item) => (
          <li
            key={item.id}
            className={`flex-col mt-3 justify-between items-center ${
              openItemId === item.id ? 'h-[360px] ' : 'h-[80px]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`text-xs text-white font-bold py-1 px-2 rounded mr-2 w-[27px] h-[20px] ${
                    item.id === 1
                      ? 'bg-orange-400 text-xs'
                      : 'bg-gray-400 text-xs'
                  }`}
                >
                  {item.id}
                </span>
                <span className="ml-2 text-base font-semibold">
                  {item.name}
                </span>
              </div>

              <div className="pr-2">
                <button onClick={() => toggleItem(item.id)}>
                  {openItemId === item.id ? <p>v</p> : <p>＾</p>}
                </button>
              </div>
            </div>

            {openItemId === item.id && (
              <div className="flex overflow-x-auto scrollbar-hide">
                <MostItem data={items} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeywordItem;
