import React from "react";

export default function MyBenefitInfo() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <strong className="block text-lg font-bold mb-4 border-b border-black">
        나의 혜택정보
      </strong>
      <ul className="space-y-2">
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            S.I.포인트
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            e포인트
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            쿠폰 내역
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            디지털보증서
          </a>
        </li>
      </ul>
    </div>
  );
}
