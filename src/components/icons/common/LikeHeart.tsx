'use client';
import React, { useEffect } from 'react';

function LikeHeart() {
  const [isLiked, setIsLiked] = React.useState(false);

  useEffect(() => {
    console.log('api', isLiked);
  }, [isLiked]);

  return (
    <div
      onClick={() => setIsLiked(!isLiked)}
      className={`
        ${isLiked ? 'bg-white border' : 'bg-slate-500'}
        w-10 h-10 rounded-full absolute top-5 right-5 z-10
        transition-all duration-300
        `}
    ></div>
  );
}

export default LikeHeart;
