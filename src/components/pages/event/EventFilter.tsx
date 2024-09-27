'use client';
import { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleEvent = () => setIsOpen(!isOpen);

  return (
    <section className="flex items-center justify-between relative">
      <div className="sticky top-0 px-6 mt-2 ml-2 bg-white font-bold text-base">
        <p>
          총 <span className="text-orange-300">{eventListCnt}</span>건
        </p>
      </div>
      <div className="flex items-center mt-6 w-[20px] h-[20px] mr-4">
        <Image
          src="/edit.png"
          width={40}
          height={40}
          alt="filter"
          className="w-[20px] h-[20px]"
          onClick={handleEvent}
        />
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleEvent}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4"
          >
            <BenefitFilterDialog data={brandData} />
          </motion.div>
        </>
      )}
    </section>
  );
}

export default EventFilter;
