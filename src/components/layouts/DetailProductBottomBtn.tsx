'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import { Button } from '../ui/button';
import SelectorModal from '../pages/detail/SelectorModal';
import { ProductPolicyRequest } from '@/types/product/productsType';
function DetailProductBottomBtn({
  colorName,
  presentPrice,
  policyData,
  Like,
}: {
  colorName: string;
  presentPrice: number;
  policyData: ProductPolicyRequest;
  Like: boolean;
}) {
  const [isOpen, setOpen] = useState(false);

  const HandleEvent = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={HandleEvent}
          />
        </>
      )}

      <div
        className={`fixed bottom-[60px] right-0 left-0 w-full z-40 transition-all duration-1000 ${
          isOpen ? 'h-[220px] bg-white' : 'h-0'
        } overflow-hidden`}
      >
        <SelectorModal
          colorName={colorName}
          presentPrice={presentPrice}
          policyData={policyData}
          Like={Like}
        />
      </div>

      {/* 버튼 컨테이너 */}
      <div className="fixed bottom-0 right-0 left-0 w-full h-[60px] z-50 flex ">
        <Button className="bg-si-787878 w-1/2 h-[60px] justify-center items-center">
          쇼핑백
        </Button>
        <Button
          onClick={HandleEvent}
          className="bg-black text-white w-1/2 h-[60px] justify-center items-center active:bg-black focus:bg-black"
        >
          바로 구매
        </Button>
      </div>
    </div>
  );
}

export default DetailProductBottomBtn;
