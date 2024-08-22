import React from "react";

export default function MyActiveInfo() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <strong className="block text-lg font-bold mb-4 border-b border-black">
        나의 활동정보
      </strong>
      <ul className="space-y-2">
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            상품리뷰
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            상품문의
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            1:1문의내역
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            이벤트 참여내역
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            친구추천
          </a>
        </li>
      </ul>
    </div>
  );
}
