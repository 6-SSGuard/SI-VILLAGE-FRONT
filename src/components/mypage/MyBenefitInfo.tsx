import React from "react";
import ListItem from "./ListItem";

export default function MyBenefitInfo() {
  const items = [
    { text: "S.I.포인트", href: "#" },
    { text: "e포인트", href: "#" },
    { text: "쿠폰 내역", href: "#" },
    { text: "디지털보증서", href: "#" },
  ];
  return (
    <div className="p-4 bg-white rounded-md shadow-md text-sm">
      <strong className="block font-bold mb-4 border-b border-black">
        나의 혜택정보
      </strong>
      <ul className="space-y-2 font-semibold">
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
}
