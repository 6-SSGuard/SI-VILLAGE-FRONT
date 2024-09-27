import React from 'react';

function Badge({ badgeText }: { badgeText: string }) {
  return (
    <p className="text-white bg-[#141A23] px-[6px] h-5 text-[10px] font-bold flex items-center justify-center">
      {badgeText}
    </p>
  );
}

export default Badge;
