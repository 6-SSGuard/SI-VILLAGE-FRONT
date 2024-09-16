'use client';
import { addCartItem } from '@/actions/cart/myDataAction';
import { TextUi } from '@/components/ui/text/TextUi';
import { useToast } from '@/hooks/use-toast';
import { productByVendorType } from '@/types/ResponseTypes';
import { ToastAction } from '@radix-ui/react-toast';
import React from 'react';

export default function AddCart({ getData }: { getData: productByVendorType }) {
  const { toast } = useToast();

  const addCart = async () => {
    const res = await addCartItem({
      id: getData.productCode,
      name: getData.productName,
      price: getData.sellingPrice,
      quantity: 1,
      isChecked: false,
    });
    console.log(res);
    if (res) {
      toast({
        title: '장바구니에 담겼습니다.',
        // description: '장바구니로 이동하시겠습니까?',
        action: <ToastAction altText="Goto cart to undo">Undo</ToastAction>,
        duration: 1000,
        className: 'bg-[#056241] text-white',
      });
    }
  };
  return (
    <>
      <TextUi
        size={'xs'}
        variant={'gray'}
        onClick={addCart}
        className="truncate-multiline"
      >
        {getData.productName}
      </TextUi>
    </>
  );
}
