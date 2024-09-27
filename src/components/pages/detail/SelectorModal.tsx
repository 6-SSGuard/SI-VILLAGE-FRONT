'use Client';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { ProductPolicyRequest } from '@/types/product/productsType';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { TextUi } from '@/components/ui/text/TextUi';
import { ToastAction } from '@radix-ui/react-toast';
import { useToast } from '@/hooks/use-toast';

function SelectorModal({
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
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState<number>(presentPrice);
  const { toast } = useToast();

  const getColorClass = () => {
    switch (colorName) {
      case 'black':
        return 'bg-black';
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      default:
        return 'bg-black'; // 기본 색상
    }
  };

  // 수량 변경 처리 함수
  //수량 관련 데이터가 없으면 제품이 없다고 판단
  const handleQuantity = (type: string) => {
    if (!policyData) return;

    if (type === 'increase') {
      if (count == policyData.maxOrderCount) {
        toast({
          description: '최대 구매 수량을 초과하였습니다.',
          action: <ToastAction altText="undo">close</ToastAction>,
          duration: 1000,
          className:
            'bg-[#056241] text-xs text-white border-none h-[30px] text-center rounded-full z-[999]',
        });
        return;
      }
      setCount((prevCount) => prevCount + 1);
      setTotalPrice(totalPrice + presentPrice);
    } else if (type === 'decrease') {
      if (count === 1) {
        toast({
          description: '최소 구매 수량은 1개입니다.',
          action: <ToastAction altText="undo">close</ToastAction>,
          duration: 1000,
          className:
            'bg-[#056241] text-xs text-white border-none h-[30px] text-center rounded-full z-[999]',
        });
        return;
      }
      setCount((prevCount) => prevCount - 1);
      setTotalPrice(totalPrice - presentPrice);
    }
  };
  return (
    <section className="h-[220px] bg-white">
      <p></p>

      <ul className="px-6">
        {/* 색상 */}
        <li
          className={`py-3 mt-12 w-[40px] h-[40px] border border-black ${getColorClass()}`}
        ></li>

        {/* 수량 */}
        <li className="py-5 flex items-center w-full">
          <div className="flex items-center w-full h-[48px] ">
            <Button
              className="border border-gray-200 text-gray-600 h-[48px] w-[48px]  flex items-center"
              variant={'outline'}
              onClick={() => handleQuantity('decrease')}
            >
              <Minus color="black" strokeWidth={2} size={'60px'} />
            </Button>
            <Button
              className="border border-gray-200 text-gray-600 w-[254px] h-[48px]"
              variant={'outline'}
            >
              {count}
            </Button>
            <Button
              className="border border-gray-200 text-gray-600 h-[48px] w-[48px]"
              variant={'outline'}
              onClick={() => handleQuantity('increase')}
            >
              <Plus color="black" strokeWidth={2} size={'10px'} />
            </Button>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="text-sm text-nowrap">판매가</span>

            <div className="flex items-center">
              <TextUi size={'lg'} className="font-bold">
                <span className="text-2xl">
                  {' '}
                  {totalPrice.toLocaleString('kr-KR')}
                </span>
              </TextUi>

              <span className="text-base ml-1 font-bold">원</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SelectorModal;
