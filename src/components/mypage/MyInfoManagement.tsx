import React from "react";

export default function MyInfoManagement() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <strong className="block text-lg font-bold mb-4 border-b border-black">
        나의 정보관리
      </strong>
      <ul className="space-y-2">
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            개인정보 수정
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            비밀번호 변경
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            SNS 연결 관리
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            배송지/환불계좌 관리
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            회원탈퇴
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            사이즈 / 뷰티정보 설정
          </a>
        </li>
        <li className="border-b border-gray-200 pb-2">
          <a href="#" className="block">
            로그인 정보 관리
          </a>
        </li>
      </ul>
    </div>
  );
}
