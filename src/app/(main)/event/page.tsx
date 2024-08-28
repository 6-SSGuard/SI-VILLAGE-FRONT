import React from 'react'
import { eventDatas } from '@/datas/eventDatas'
import { eventListDataType } from '@/types/eventTypes';
import EventListContainer from './mainevent/eventcontainer';
import EventFilter from '@/components/pages/event/EventFilter';

async function getEventListData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await eventDatas;
  return res;
}

async function page() {

  const data:eventListDataType = await getEventListData();

  return (
    <main>
    <div>
      <EventFilter eventListCnt={data.eventListCnt} />
      <EventListContainer 
      eventListData={data.data}/>
      </div>
    </main>
  )
}

export default page