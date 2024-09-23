import React from 'react';
import { eventDatas } from '@/datas/dummys/eventDatas';
import { eventListDataType } from '@/types/eventTypes';
import Eventcontainer from '@/components/pages/event/EventContainer';
import EventFilter from '@/components/pages/event/EventFilter';
import { EventBrandListType } from '@/types/event/eventType';
import { EventBrandFilterData } from '@/datas/dummys/eventDatas';
import EventFilterCustom from '@/components/pages/event/EventFilterCustom';

async function getEventListData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await eventDatas;
  return res;
}

async function getEventFilterBrandData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await EventBrandFilterData;
  return res;
}
async function page() {
  const data: eventListDataType = await getEventListData();
  const brandData: EventBrandListType = await getEventFilterBrandData();
  return (
    <main>
      <div className="flex-col">
        <EventFilterCustom />
        <EventFilter
          eventListCnt={data.eventListCnt}
          brandData={brandData.data}
        />
        <Eventcontainer eventListData={data.data} />
      </div>
    </main>
  );
}

export default page;
