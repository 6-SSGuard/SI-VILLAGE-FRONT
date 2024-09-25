import EventCard from '@/components/pages/event/EventCard';
import { eventCardDataType, eventListDataType } from '@/types/eventTypes';
import React from 'react';

function Eventcontainer({
  eventListData,
}: {
  eventListData: eventCardDataType[];
}) {
  return (
    <section className="container mt-3">
      <ul className="flex-col gap-3">
        <EventCard event={eventListData} />
      </ul>
    </section>
  );
}

export default Eventcontainer;
