import Link from "next/link";
import React from "react";

export interface BottomTabBarItemsType {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function BottomTabBarItems({ href, icon, label }: BottomTabBarItemsType) {
  return (
    <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
      <Link href={href} className="flex justify-center items-center flex-col">
        {icon}
        <span className="text-si-text-gray text-[10px]">{label}</span>
      </Link>
    </li>
  );
}

export default BottomTabBarItems;
