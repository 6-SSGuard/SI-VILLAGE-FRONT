import React from "react";
import ListItem from "./ListItem";

export default function MyInterestInfo() {
  const items = [
    { text: "관심클럽 설정", href: "#" },
    { text: "찜", href: "#" },
    { text: "재입고 알림신청 내역", href: "#" },
  ];
  return (
    <div className="p-4 bg-white rounded-md shadow-md text-sm">
      <strong className="block font-bold mb-4 border-b border-black">
        나의 관심정보
      </strong>
      <ul className="space-y-2 font-semibold">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
