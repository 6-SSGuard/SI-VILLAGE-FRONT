'use client';
import React, { useEffect, useState } from 'react';
import WhiteBackIcon from '../icons/common/WhiteBackIcon';
import WhiteHome from '../icons/common/WhiteHome';
import WhiteSearchIcon from '../icons/common/WhiteSearchIcon';
import WhiteBagIcon from '../icons/common/WhiteBagIcon';
import { useRouter } from 'next/navigation';
import SearchModal from '../pages/search/searchModal';
import Link from 'next/link';
import useScrollDirection from '../hook/useScrollDirection';

function ProductDetailHeader() {
  const isVisible = useScrollDirection();
  const router = useRouter();
  const [isWhite, setIsWhite] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 56) {
        setIsWhite(true);
      } else {
        setIsWhite(!isVisible.isScrollingUp);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible.isScrollingUp]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsScrolled(true);
        setIsWhite(false);
      } else {
        setIsScrolled(false);
        setIsWhite(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* <div
        className="absolute inset-0 h-[170px] w-full"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)',
          zIndex: -1,
        }}
      /> */}
      <header
        className={`fixed top-0 left-0 w-full h-[56px] flex items-center justify-between p-[0_14px_0_0] z-20 transition-all duration-300 ${
          isScrolled
            ? isVisible.isScrollingUp
              ? 'translate-y-0 bg-white'
              : '-translate-y-full'
            : 'translate-y-0 bg-transparent'
        }`}
      >
        {/* 왼쪽 그룹 */}
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()}>
            {/* 아이콘에 isWhite 값을 props로 전달 */}
            <WhiteBackIcon isWhite={isWhite} />
          </button>
          <Link href="/">
            <WhiteHome isWhite={isWhite} />
          </Link>
        </div>

        {/* 오른쪽 그룹 */}
        <div className="flex items-center gap-4">
          <div onClick={openModal}>
            <WhiteSearchIcon isWhite={isWhite} />
          </div>

          <Link href="cartmain">
            <WhiteBagIcon isWhite={isWhite} />
          </Link>
        </div>
        {isModalOpen && <SearchModal onClose={closeModal} />}
      </header>
    </div>
  );
}

export default ProductDetailHeader;
