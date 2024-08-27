import React from 'react';

function Badge({badgeText}:{badgeText:string}) {
  
    return (
      <li className='text-white text-xs bg-black text-center px-2 py-1 w-fit'>
        {badgeText}
      </li>
    )
  }
  
  export default Badge