'use client';
import ArrowLeftIcon from '@/components/icons/common/ArrowLeftIcon';
import SearchIcon from '@/components/icons/common/SearchIcon';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SearchModal from '../search/searchModal';

function CategoryHeader() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="flex bg-[#F9F9F9] items-center w-full px-4 py-2">
      <button type="button" onClick={() => router.back()}>
        <ArrowLeftIcon />
      </button>

      <button
        className="flex items-center w-full border-b border-black"
        onClick={openModal}
      >
        <SearchIcon />
        <span className="text-sm ml-2 text-[#787878]">
          미리 준비하는 추석 최대 15% 쿠폰
        </span>
      </button>
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </header>
  );
}

export default CategoryHeader;
