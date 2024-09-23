'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import BenefitFilterDialog from './EventModal';
import { motion } from 'framer-motion';
import { EventBrandDataType } from '@/types/event/eventType';

function EventFilter({
  eventListCnt,
  brandData,
}: {
  eventListCnt: number;
  brandData: EventBrandDataType[];
}) {
  const [isOpen, setIsOpen] = useState(false); // overlay 및 다이얼로그 상태
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 다이얼로그 표시 상태

  // 모달이 열리면 스크롤 비활성화, 닫히면 스크롤 활성화
  useEffect(() => {
    if (isOpen) {
      // 모달이 열리면 body의 스크롤을 막음
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫히면 스크롤 다시 활성화
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때도 스크롤을 다시 허용
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 다이얼로그 열림 상태 관리
  const handleEvent = () => {
    if (!isOpen) {
      setIsOpen(true); // overlay 먼저 열림

      // overlay가 열리고 나서 다이얼로그가 열리게 함
      setTimeout(() => {
        setIsDialogOpen(true); // 다이얼로그 표시
      }, 300); // 300ms 뒤에 다이얼로그 열기
    } else {
      // 다이얼로그 먼저 닫고
      setIsDialogOpen(false);

      // 다이얼로그가 닫힌 후 overlay를 닫음
      setTimeout(() => {
        setIsOpen(false); // overlay 닫기
      }, 300); // 다이얼로그 닫히고 300ms 뒤에 overlay 닫기
    }
  };

  return (
    <section className="justify-between flex items-center relative">
      <div className="sticky top-0 px-6 mt-2 ml-2 bg-white font-bold text-base">
        <p>
          총 <span className="text-orange-300">{eventListCnt}</span>건
        </p>
      </div>
      <div className="flex mr-4 items-center mt-6 w-[20px] h-[20px]">
        <Image
          src="/edit.png"
          width={40}
          height={40}
          alt="filter"
          className="w-[20px] h-[20px]" // 이미지 크기 수정
          onClick={handleEvent} // 클릭 시 다이얼로그 열기/닫기
        />
      </div>

      {/* 검은 화면(overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleEvent} // overlay 클릭 시 닫기
        ></div>
      )}

      {/* 다이얼로그 */}
      {isDialogOpen && (
        <motion.div
          transition={{ duration: 3 }}
          tabIndex={-1}
          className={`fixed bottom-0 left-0 right-0 z-50 ease-in-out ${
            isDialogOpen ? 'translate-y-0' : 'translate-y-full'
          } bg-white p-4`}
        >
          <BenefitFilterDialog data={brandData} />
        </motion.div>
      )}
    </section>
  );
}

export default EventFilter;
