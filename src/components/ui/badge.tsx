import React from 'react';

function Badge({badgeText}:{badgeText:string}) {
  
    return (
      <li className='text-white text-xs bg-black text-center px-2 py-1 w-10 h-6'>
        {badgeText}
      </li>
    )
  }
  
  export default Badge