import React from "react";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";

function ListItem({ text, href }: { text: string; href: string }) {
  return (
    <li className="border-b border-gray-200 pb-2">
      <a href={href} className="flex justify-between items-center">
        <span>{text}</span>
        <ArrowRightIcon />
      </a>
    </li>
  );
}

export default ListItem;
