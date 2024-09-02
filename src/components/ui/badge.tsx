import React from 'react';

function Badge({ badgeText }: { badgeText: string }) {
  return (
    <p className="text-white text-xs bg-black text-center px-2 py-1 w-18 h-5">
      {badgeText}
    </p>
  );
}

export default Badge;
