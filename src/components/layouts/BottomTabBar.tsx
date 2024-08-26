import Link from "next/link";
import React from "react";

function BottomTabBar() {
  return (
    <div className="bg-white text-center p-1 fixed inset-x-0 bottom-0 border-t border-gray-300">
      {/* 하단바 */}
      <nav>
        <ul className="flex justify-around list-none m-0 p-0">
          <li className="active:scale-95 active:bg-gray-400 p-2 rounded-lg transition duration-150 ease-in-out font-hyemin-bold">
            <Link href="#">
              {/* <img src={} alt="" className="w-8" /> */}
              <span>Category</span>
            </Link>
          </li>
          <li className="active:scale-95 active:bg-gray-400 p-2 rounded-lg transition duration-150 ease-in-out font-hyemin-bold">
            <Link href="#">
              {/* <a className="flex flex-col items-center justify-center text-sm"> */}
              {/* <img
                  src={}
                  alt=""
                  className="w-8"
                /> */}
              brand
              {/* </a> */}
            </Link>
          </li>
          <li className="active:scale-95 active:bg-gray-400 p-2 rounded-lg transition duration-150 ease-in-out font-hyemin-bold">
            <Link href="/">
              {/* <img
                  src={}
                  alt=""
                  className="w-8"
                /> */}
              Main
            </Link>
          </li>

          <li className="active:scale-95 active:bg-gray-400 p-2 rounded-lg transition duration-150 ease-in-out font-hyemin-bold">
            <Link href="/mypage">
              {/* <img
                  src={}
                  alt=""
                  className="w-8"
                /> */}
              My
            </Link>
          </li>
          <li className="active:scale-95 active:bg-gray-400 p-2 rounded-lg transition duration-150 ease-in-out font-hyemin-bold">
            <Link href="#">
              {/* <img
                  src={}
                  alt="myprofile"
                  className="w-8"
                /> */}
              Recent
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomTabBar;
