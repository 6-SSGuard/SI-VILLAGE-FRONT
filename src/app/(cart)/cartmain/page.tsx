import React from 'react';
import CartHearder from '@/components/pages/cart/CartHeader';
import { CartProductData } from '@/datas/dummys/cartDatas';
import { CartProductListType } from '@/types/cart/cartTypes';
import { getCartById, getCartItemIds } from '@/actions/cart/cartActions';

async function getCartListData() {
  const res = await CartProductData;

  return res;
}

export interface CartListItem {
  id: number;
}

async function Page() {
  const Data: CartProductListType = await getCartListData();
  const cartId: CartListItem[] = await getCartItemIds();
  // console.log('cartid', cartId);
  // const cartData = await getCartById(cartId);

  return (
    <main>
      <CartHearder cartListId={cartId} />
    </main>
  );
}

export default Page;
