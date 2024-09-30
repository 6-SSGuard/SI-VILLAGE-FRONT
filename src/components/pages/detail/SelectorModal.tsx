'use Client';

import { useState } from 'react';
import { ProductPolicyRequest } from '@/types/product/productsType';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { TextUi } from '@/components/ui/text/TextUi';
import { ToastAction } from '@radix-ui/react-toast';
import { useToast } from '@/hooks/use-toast';
import { detailProductOpion } from '@/types/detail/detailproductinfo';
import { addCartType } from '@/types/cart/cartTypes';
import { addCartItem } from '@/actions/cart/cartActions';

function SelectorModal({
  colorName,
  presentPrice,
  policyData,
  option,
}: {
  colorName: string;
  presentPrice: number;
  policyData: ProductPolicyRequest;
  option: detailProductOpion;
}) {
  const [count, setCount] = useState(1);
  const [isOpen, setOpen] = useState(false);

  const [totalPrice, setTotalPrice] = useState<number>(presentPrice);
  const { toast } = useToast();
  const CartData: addCartType = {
    productCode: policyData.productCode,
    productOptionId: option.productOptionId,
    quantity: count,
  };

  // 장바구니에 아이템 추가하는 함수
  const addToCart = async () => {
    try {
      const response = await addCartItem(CartData);
      console.log(response, 'addCartTest');
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  const HandleEvent = async () => {
    if (isOpen) {
      await addToCart();
    }
    console.log('click');
    setOpen(!isOpen);
  };
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
    <section className="h-[250px] bg-white">
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

        <li>
          <div className="fixed bottom-0 right-0 left-0 w-full h-[60px]  flex ">
            <Button
              className="bg-white w-1/2 h-[60px] justify-center items-center z-100"
              onClick={HandleEvent}
              type="submit"
            >
              쇼핑백
            </Button>
            <Button className="bg-black text-white w-1/2 h-[60px] justify-center items-center active:bg-black focus:bg-black z-100">
              바로 구매
            </Button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SelectorModal;
