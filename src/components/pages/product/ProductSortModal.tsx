'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sortingOptions = [
  '인기상품순',
  '신상품순',
  '리뷰순',
  '판매량순',
  '할인율순',
  '낮은가격순',
  '높은가격순',
  '인기찜순',
];

const ProductSortModal: React.FC<BottomModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed max-h inset-0 z-100 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}
      <motion.div
        className={
          'fixed inset-x-0 bottom-0 z-50 bg-white p-4 rounded-t-lg shadow-lg'
        }
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 80, stiffness: 300 }}
      >
        <div className="flex items-center justify-center w-full">
          <button
            onClick={onClose}
            className="w-12 h-1 rounded bg-[#E0E0E0] focus:outline-none mb-4"
            aria-label="Close modal"
          >
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          <div className="flex justify-between items-center  overflow-y-auto max-h-48">
            <h2 className="text-2xl font-semibold p-[20px_24px_26px]">
              Sort By
            </h2>
          </div>
          {/* 정렬 종류 */}

          <ul>
            {sortingOptions.map((option, index) => (
              <li key={index} className="px-6 leading-[48px] text-si-787878">
                {option}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ProductSortModal;
