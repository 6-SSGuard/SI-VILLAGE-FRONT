'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
// import { cartItemDataType, cartItemType } from '@/types/RequestTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export interface cartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isChecked: boolean;
}

export const cartCheckUpdate = async (
  item: cartItemType,
  checked: boolean
): Promise<boolean> => {
  'use server';
  const res = fetch(`${process.env.API_BASE_URL}/api/cart/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      isChecked: checked,
    }),
  });

  revalidateTag('checkCart');
  return true;
};

export const getCartItemCountByUser = async (
  token: string
): Promise<number> => {
  'use server';

  const res = await fetch('http://localhost:3100/carts', {
    method: 'GET',
    next: { tags: ['cartCount'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch cart item list');
  }
  const data = await res.json();
  // console.log('data', data);
  return data.length;
};

export const addCartItem = async (item: cartItemType): Promise<boolean> => {
  'use server';
  const res = await fetch('http://localhost:3100/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      isChecked: item.isChecked,
    }),
  });

  if (!res.ok) {
    return false;
  }
  revalidateTag('cartCount');
  return true;
};

// export async function fetchCartItemList(): Promise<cartItemDataType> {
//   const res = await fetch('http://localhost:3100/carts', {
//     method: 'GET',
//     next: { tags: ['checkCart, addCart, cartCount, deleteCart'] },
//     cache: 'no-cache',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch cart item list');
//   }
//   // console.log('res', res);
//   const data = await res.json();
//   const response: cartItemDataType = {
//     totalPrice: data
//       .filter((item: cartItemType) => item.isChecked)
//       .reduce(
//         (acc: number, item: cartItemType) => acc + item.price * item.quantity,
//         0
//       ),
//     disCountTotalPrice: data
//       .filter((item: cartItemType) => item.isChecked)
//       .reduce(
//         (acc: number, item: cartItemType) =>
//           acc + item.price * item.quantity * 0.1,
//         0
//       ),
//     shippingFee: 3000,
//     cartItemList: data,
//   };
//   return response;
// }
