import Link from 'next/link';
import React from 'react';

function DetailProductBottomBtn() {
  return (
    <div className="fixed font-semibold bottom-0 left-0 w-full h-[56px] flex  z-50 text-white">
      <Link
        href="cartmain"
        className="bg-si-787878 w-1/2 h-full flex justify-center items-center"
      >
        쇼핑백
      </Link>
      <Link
        href="#"
        className="bg-si-131922 w-1/2 h-full flex justify-center items-center"
      >
        바로 구매
      </Link>
    </div>
  );
}

export default DetailProductBottomBtn;
