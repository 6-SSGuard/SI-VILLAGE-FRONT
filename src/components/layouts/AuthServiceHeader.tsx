"use client";
import React, { useEffect, useState } from "react";
import TitleHeader from "../ui/TitleHeader";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import SearchIcon from "../icons/SearchIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AuthServiceHeader() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (pathName === "/sign-in") {
      setTitle("로그인");
    } else if (pathName === "/sign-up") {
      setTitle("회원가입");
    } else if (pathName === "/sign-up/join-simple") {
      setTitle("온라인 간편가입");
    } else if (pathName === "/sign-in/ForgotCredential") {
      setTitle("ID/PW 찾기");
    } else if (pathName === "/mypage") {
      setTitle("마이페이지");
    } else if (pathName === "/") {
      setTitle("");
    }
  }, [pathName]);

  return (
    <header className="flex items-center justify-between w-full h-[56px] px-[16px]">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full">
          <li>
            {pathName === "/" ? (
              <Image
                src="/siv_logo.png"
                alt="메인페이지 이미지"
                width={180}
                height={65}
                className="items-start"
              />
            ) : (
              <ArrowLeftIcon />
            )}
          </li>
          <li className="flex-1 flex justify-center">
            <TitleHeader title={title} textStyle="text-lg font-semibold" />
          </li>
          <li>
            <ul className="flex items-center gap-4">
              <li>
                <SearchIcon />
              </li>
              <li>
                <ShoppingBagIcon />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
