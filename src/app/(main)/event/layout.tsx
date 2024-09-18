import HeaderTab from '@/components/pages/event/HeaderTab';
import React from 'react';
import EventCategort from '@/components/pages/event/EventCategort';
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <EventCategort />
      {children}
    </main>
  );
}
