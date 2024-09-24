'use client';
import { useState } from 'react';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import CartGeneral from './CartGeneral';
import { CartProductDataType } from '@/types/cart/cartTypes';
import { CartListItem } from '@/app/(cart)/cartmain/page';

function CartHearder({ cartListId }: { cartListId: CartListItem[] }) {
  const [activityContent, setContent] = useState('general');

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="flex justify-between border-b">
        {/* 일반배송 탭 */}
        <TabsTrigger
          value="general"
          className={`w-1/2 py-2 font-bold text-center transition-all ${
            activityContent === 'general'
              ? 'bg-white text-black border-b-2 border-black'
              : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
          }`}
          onClick={() => setContent('general')}
        >
          일반배송
        </TabsTrigger>

        {/* 정기배송 탭 */}
        <TabsTrigger
          value="regular"
          className={`w-1/2 py-2 font-bold text-center transition-all ${
            activityContent === 'regular'
              ? 'bg-white text-black border-b-2 border-black'
              : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
          }`}
          onClick={() => setContent('regular')}
        >
          정기배송
        </TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <CartGeneral cartListId={cartListId} />
      </TabsContent>
      <TabsContent value="regular">
        <section className="flex items-center justify-center">
          이 페이지는 현재 준비 중입니다.
        </section>
      </TabsContent>
    </Tabs>
  );
}

export default CartHearder;
