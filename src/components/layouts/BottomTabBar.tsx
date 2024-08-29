import Link from "next/link";
import React from "react";

function BottomTabBar() {
  return (
    <div className="text-sm bg-white items-center justify-center p-1 fixed inset-x-0 bottom-0 border-t border-gray-200 z-10">
      {/* 하단바 */}
      <nav>
        <ul className="grid grid-cols-5 gap-0 list-none m-0 p-[2px]">
          <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
            <Link
              href="/category"
              className="flex justify-center items-center flex-col"
            >
              <span>Category</span>
            </Link>
          </li>
          <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
            <Link
              href="/searchbrand"
              className="flex justify-center items-center flex-col"
            >
              Brand
            </Link>
          </li>
          <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
            <Link
              href="/"
              className="flex justify-center items-center flex-col"
            >
              <img
                src="https://m.sivillage.com/mo/assets/comm/image/logo_tabbar_siv.png"
                alt=""
                className="w-12"
              />
            </Link>
          </li>
          <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
            <Link
              href="/mypage"
              className="flex justify-center items-center flex-col"
            >
              My
            </Link>
          </li>
          <li className="rounded-lg transition duration-150 ease-in-out font-hyemin-bold flex justify-center items-center flex-col">
            <Link
              href="#"
              className="flex justify-center items-center flex-col"
            >
              Recent
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomTabBar;
