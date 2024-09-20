import React from 'react';
import { EventBrandDataType } from '@/types/event/eventType';
function EventModalCard({ data }: { data: EventBrandDataType[] }) {
  return (
    <div>
      <ul className="flex-col px-4 mt-4">
        {data.map((item) => (
          <li key={item.id} className="flex justify-between mt-4">
            <div>
              <span className="font-sans text-base">{item.BrandName}</span>
              <span className="ml-1 text-base font-sans">{`(${item.BrandNum})`}</span>
            </div>

            <div className="">
              <input
                className="w-[24px] h-[24px] border border-white"
                type="checkbox"
                checked={item.state}
              ></input>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventModalCard;
