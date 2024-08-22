import React from "react";

export default function MyShoppingInfo() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <strong className="block text-lg font-bold mb-4 border-b border-black">
        나의 쇼핑정보
      </strong>
      <ul className="space-y-2">
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            주문/배송 조회
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            오프라인 주문 조회
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            취소/반품/교환 조회
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            Vpay 간편결제 관리
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            정기배송 조회
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            선물함
          </a>
        </li>
      </ul>
    </div>
  );
}
