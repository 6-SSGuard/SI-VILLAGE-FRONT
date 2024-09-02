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
      <ul className="flex flex-col gap-3">
        {eventListData.map((event: eventCardDataType) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
}

export default Eventcontainer;
