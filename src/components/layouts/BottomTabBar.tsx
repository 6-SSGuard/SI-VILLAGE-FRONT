import Link from "next/link";
import React from "react";
import BottomCategoryIcon from "../icons/bottom/BottomCategoryIcon";
import BottomBrandIcon from "../icons/bottom/BottomBrandIcon";
import BottomMyIcon from "../icons/bottom/BottomMyIcon";
import BottomRecentIcon from "../icons/bottom/BottomRecentIcon";
import BottomTabBarItems from "./BottomTabBarItems";

function BottomTabBar() {
  return (
    <div className="text-sm bg-white items-center justify-center p-1 fixed inset-x-0 bottom-0 border-t border-gray-200 z-10">
      {/* 하단바 */}
      <nav>
        <ul className="grid grid-cols-5 gap-0 list-none m-0 p-[2px]">
          <BottomTabBarItems
            href="/category"
            icon={<BottomCategoryIcon />}
            label="Category"
          />
          <BottomTabBarItems
            href="/searchbrand"
            icon={<BottomBrandIcon />}
            label="BRAND"
          />
          <BottomTabBarItems
            href="/"
            icon={
              <img
                src="https://m.sivillage.com/mo/assets/comm/image/logo_tabbar_siv.png"
                alt="Home"
                className="w-[44px]"
              />
            }
            label=""
          />
          <BottomTabBarItems
            href="/mypage"
            icon={<BottomMyIcon />}
            label="MY"
          />
          <BottomTabBarItems
            href="#"
            icon={<BottomRecentIcon />}
            label="Recent"
          />
        </ul>
      </nav>
    </div>
  );
}

export default BottomTabBar;
