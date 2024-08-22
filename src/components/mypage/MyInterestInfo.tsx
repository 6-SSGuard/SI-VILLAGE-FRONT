import React from "react";

export default function MyInterestInfo() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <strong className="block text-lg font-bold mb-4 border-b border-black">
        나의 관심정보
      </strong>
      <ul className="space-y-2">
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            관심클럽 설정
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            찜
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            재입고 알림신청 내역
          </a>
        </li>
      </ul>
    </div>
  );
}
