import React from "react";
import ListItem from "./ListItem";

export default function MyInfoManagement() {
  const items = [
    { text: "개인정보 수정", href: "#" },
    { text: "비밀번호 변경", href: "#" },
    { text: "SNS 연결 관리", href: "#" },
    { text: "배송지/환불계좌 관리", href: "#" },
    { text: "회원탈퇴", href: "#" },
    { text: "사이즈 / 뷰티정보 설정", href: "#" },
    { text: "로그인 정보 관리", href: "#" },
  ];
  return (
    <div className="p-4 bg-white shadow-md text-sm">
      <strong className="block font-bold mb-4 border-b border-black">
        나의 정보관리
      </strong>
      <ul className="space-y-2 font-semibold">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
