import { eventCardDataType } from '@/types/eventTypes';
import Image from 'next/image';
import React from 'react';
import Badge from '@/components/ui/badge';

function EventCard({ event }: { event: eventCardDataType[] }) {
  return (
    <div className="flex-col justify-between">
      {event.map((event) => (
        <li key={event.id}>
          <div className="w-full h-70 flex">
            <Image
              className="mt-4"
              src={event.eventImageUrl}
              alt={event.eventTitle}
              width={150}
              height={150}
            />

            <div className="flex justify-top flex-col ml-6 mt-6 overflow-x-hidden">
              <p className="text-xs text-black ">{event.brandName}</p>
              <p className="text-base font-bold mt-2 text-nowrap truncate">
                {event.eventName}
              </p>
              <p className="text-xs mt-2 text-el">{event.eventTitle}</p>
              <ul className="flex gap-1 mt-2">
                {event.badgeList.map((badge, index) => (
                  <Badge key={index} badgeText={badge} />
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default EventCard;
