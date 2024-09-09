import React from 'react';
import DetailHeader from '@/components/layouts/DetailHeader';
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-auto">
      <DetailHeader />
      {children}
    </div>
  );
}

export default layout;
