import React, { ReactNode } from 'react';
import EventCategort from './EventCategort';
function layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <EventCategort />
      {children}
    </main>
  );
}

export default layout;
