import React from 'react';
import CartHearder from '@/components/pages/cart/CartHeader';
import { CartProductData } from '@/datas/dummys/cartDatas';
import { CartProductListType } from '@/types/cart/cartTypes';

async function getCartListData() {
  const res = await CartProductData;

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
