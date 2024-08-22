import React from "react";
import Link from "next/link";

export default function MyPageDeliveryInfo() {
  return (
    <div className="p-4">
      <div className="mypage__lookup">
        <h2 className="text-lg font-semibold mb-4">
          <Link href="#" passHref>
            주문/배송 조회
          </Link>
        </h2>
        <ul className="space-y-2">
          <li>
            <span className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              주문/결제
              <em className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                0
              </em>
            </span>
          </li>
          <li>
            <span className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              상품준비중
              <em className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                0
              </em>
            </span>
          </li>
          <li>
            <span className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              배송준비중
              <em className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                0
              </em>
            </span>
          </li>
          <li>
            <span className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              배송중
              <em className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                0
              </em>
            </span>
          </li>
          <li>
            <span className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              배송완료
              <em className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                0
              </em>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
