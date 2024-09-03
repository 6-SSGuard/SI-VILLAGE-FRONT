import React from 'react';
import { Button } from '../ui/button';

function BestButtonList() {
  return (
    <div>
      <ul className="flex w-full overflow-auto whitespace-nowrap items-center pl-6 pt-1 pr-6 scrollbar-hide">
        <li>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            전체
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            뷰티
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            여성의류
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            남성의류
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            백
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            슈즈
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            액세서리
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            스포츠/레저
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            골프
          </button>
          <button className="border border-gray-300 text-sm px-4 mr-1 mb-1 py-3">
            키즈
          </button>
          <button className="border border-gray-300 text-sm px-4 mb-1 py-3">
            라이프
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BestButtonList;
