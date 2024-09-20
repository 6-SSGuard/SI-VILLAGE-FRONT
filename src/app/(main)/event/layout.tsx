import HeaderTab from '@/components/pages/event/HeaderTab';
import React from 'react';
import EventCategory from '@/components/pages/event/EventCategory';
import EventBanner from '@/components/pages/event/EventBanner';
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <EventCategory />
      <EventBanner />
      {children}
    </main>
  );
}
