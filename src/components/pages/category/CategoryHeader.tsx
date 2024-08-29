"use client";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { useRouter } from "next/navigation";
import React from "react";

function CategoryHeader() {
  const router = useRouter();
  return (
    <header className="flex bg-[#F9F9F9] items-center w-full px-4 py-2">
      <button type="button" onClick={() => router.back()}>
        <ArrowLeftIcon />
      </button>

      <button className="flex items-center w-full border-b border-black">
        <SearchIcon />
        <span className="text-sm ml-2 text-[#787878]">
          미리 준비하는 추석 최대 15% 쿠폰
        </span>
      </button>
    </header>
  );
}

export default CategoryHeader;
