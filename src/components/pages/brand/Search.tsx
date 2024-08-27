"use client";
import React, { useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import BrandList from "./BrandList";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  return (
    <>
      <div className="flex mt-3 w-11/12 items-center border-b-2 border-gray-300 p-2 mx-auto">
        <SearchIcon />
        <input
          type="text"
          placeholder="브랜드명 검색"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full mx-2 bg-transparent focus:outline-none placeholder-gray-300 text-black focus:text-black"
        />
      </div>
      <BrandList searchQuery={searchQuery} />
    </>
  );
}

export default Search;
