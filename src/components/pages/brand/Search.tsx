'use client';
import React, { useState } from 'react';
import SearchIcon from '@/components/icons/common/SearchIcon';
import BrandList from './BrandList';

import { BrandDataType } from '@/actions/brandAction';

function Search({ brandData }: { brandData: BrandDataType[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  console.log(brandData);
  return (
    <>
      <div className="flex mt-3 w-11/12 items-center border-b-2 border-gray-300 p-2 mx-auto">
        <SearchIcon size={24} />
        <input
          type="text"
          placeholder="브랜드명 검색"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full mx-2 bg-transparent focus:outline-none placeholder-gray-300 text-black focus:text-black"
        />
      </div>
      <BrandList searchQuery={searchQuery} brandData={brandData} />
    </>
  );
}

export default Search;
