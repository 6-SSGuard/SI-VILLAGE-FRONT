"use client";
import React, { useEffect, useState } from "react";
import TitleHeader from "../ui/TitleHeader";
import ArrowLeftIcon from "../icons/common/ArrowLeftIcon";
import SearchIcon from "../icons/common/SearchIcon";
import ShoppingBagIcon from "../icons/common/ShoppingBagIcon";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthServiceHeader() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (pathName === "/sign-in") {
      setTitle("로그인");
    } else if (pathName === "/sign-up") {
      setTitle("회원가입");
    } else if (pathName === "/sign-up/join-simple") {
      setTitle("온라인 간편가입");
    } else if (pathName === "/sign-in/forgotcredential") {
      setTitle("ID/PW 찾기");
    } else if (pathName === "/mypage") {
      setTitle("마이페이지");
    } else if (
      pathName === "/" ||
      pathName === "/deal" ||
      pathName === "/event"
    ) {
      setTitle("");
    } else if (pathName === "/searchbrand" || pathName === "/myfavor") {
      setTitle("BRAND");
    }
  }, [pathName]);

  return (
    <header className="flex items-center justify-between w-full h-[56px] p-[0_16px_0_0]">
      <nav className="w-full">
        <ul className="flex items-center justify-between w-full">
          <li>
            {pathName === "/" ||
            pathName === "/deal" ||
            pathName === "/event" ? (
              <Image
                src="/siv_logo.png"
                alt="메인페이지 이미지"
                width={180}
                height={65}
                className="items-start"
              />
            ) : (
              <button type="button" onClick={() => router.back()}>
                <ArrowLeftIcon />
              </button>
            )}
          </li>
          <li className="absolute left-[50%] translate-x-[-50%]">
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
