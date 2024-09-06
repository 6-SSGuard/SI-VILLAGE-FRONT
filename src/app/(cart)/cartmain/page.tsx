import React from 'react';
import CartHearder from '@/components/pages/cart/CartHeader';
import { cartProductData } from '@/datas/dummys/cartDatas';
import { CartProductListType } from '@/types/cart/cartTypes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import CartGeneral from '@/components/pages/cart/CartGeneral';
async function getCartListData() {
  const res = await cartProductData;

  return res;
}

async function Page() {
  const Data: CartProductListType = await getCartListData();

  return (
    <main>
      <CartHearder cartListData={Data.data} />
    </main>
  );
}

export default Page;
