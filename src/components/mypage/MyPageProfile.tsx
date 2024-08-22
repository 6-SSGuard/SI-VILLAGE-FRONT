import React from "react";
import Link from "next/link";

export default function MyPageProfile() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-16 h-16">
            <img
              src="cdn-mo.sivillage.com/mo/assets/comm/image/badge_diamond.png"
              alt="Badge"
              className="w-8 h-8 items-center"
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-bold">WELCOME</p>
            <p className="text-sm">
              <span className="font-medium">박영진님</span>
              <button
                className="text-blue-500 underline ml-2"
                data-di-id="di-id-d446ed98-492f0858"
              >
                다음달 등급
              </button>
            </p>
          </div>
        </div>
        <button
          className="border border-gray-300 py-1 px-4 rounded text-sm"
          data-di-id="di-id-99982d9c-5d9e3814"
        >
          멤버십
        </button>
      </div>
      <ul className="flex items-center justify-around h-11 mt-6 mb-5 border border-gray-300 rounded-md box-border divide-x divide-gray-300">
        <li className="flex-1 text-center">
          <Link
            href="#"
            className="flex items-center justify-center h-full text-gray-700 hover:text-black"
          >
            찜
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="#"
            className="flex items-center justify-center h-full text-gray-700 hover:text-black"
          >
            배송지 관리
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="#"
            className="flex items-center justify-center h-full text-gray-700 hover:text-black"
          >
            채팅상담
          </Link>
        </li>
      </ul>

      <ul className="mt-4 grid grid-cols-2 gap-1">
        <li>
          <Link
            href="#"
            className="flex flex-col justify-between items-center bg-gray-100 text-gray-700 hover:text-black p-4"
          >
            <p className="font-bold">
              0<span>P</span>
            </p>
            <p className="text-xs">S.I.포인트</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex flex-col justify-between items-center bg-gray-100 text-gray-700 hover:text-black p-4"
          >
            <p className="font-bold">
              0<span>P</span>
            </p>
            <p className="text-xs">e포인트</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex flex-col justify-between items-center bg-gray-100 text-gray-700 hover:text-black rounded p-4"
          >
            <p className="font-bold">
              0<span>장</span>
            </p>
            <p className="text-xs">쿠폰</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex flex-col justify-between items-center bg-gray-100 text-gray-700 hover:text-black rounded p-4"
          >
            <p className="font-bold">
              0<span>개</span>
            </p>
            <p className="text-xs">리뷰</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
