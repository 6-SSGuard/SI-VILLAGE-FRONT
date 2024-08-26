import React from "react";
import Link from "next/link";

export default function MyPageDeliveryInfo() {
  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">
          {/* 주문 조회 링크로 연결시키기 */}
          <Link href="#" passHref>
            주문/배송 조회
          </Link>
        </h2>
        <ul className="flex flex-row space-x-4 text-xs">
          <li className="flex items-center">
            <span className="flex flex-col items-center">
              <p>주문/결제</p>
              <p>0</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex flex-col items-center">
              <p>상품준비중</p>
              <p>0</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex flex-col items-center">
              <p>배송준비중</p>
              <p>0</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex flex-col items-center">
              <p>배송중</p>
              <p>0</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex flex-col items-center">
              <p>배송완료</p>
              <p>0</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
