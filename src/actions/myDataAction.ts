'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { cartItemType } from '@/types/cart/cartTypes';
// import { commonResType } from '@/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export async function getMyData(path: string): Promise<number> {
  let apiUrl = '';

  console.log(path);
  switch (path) {
    case 'mypage/point':
      apiUrl = 'point';
      break;
    case 'mypage/e-point':
      apiUrl = 'e-point';
      break;
    case 'mypage/coupon':
      apiUrl = 'my-coupon';
      break;
    default:
      break;
  }

  // const response = await fetch(`${process.env.API_BASE_URL}/api/v1/${apiUrl}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  // });
  // if (!response.ok) {
  //   throw new Error('Failed to fetch');
  // }
  // const data = (await response.json()) as commonResType;
  // const myData = data.data as myDataType;

  let myData = 0;
  if (path === '/mypage/point') {
    myData = 1000;
  } else if (path === '/mypage/e-point') {
    myData = 2000;
  } else if (path === '/mypage/coupon') {
    myData = 3;
  }

  // console.log(myData);

  return myData;
}

export const cartCheckUpdate = async (item: cartItemType, checked: boolean) => {
  'use server';
  const res = fetch(`http://localhost:3100/carts/${item.id}`, {
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
  // data fetch
};

export const getCartItemCountByUser = async (
  token: string
): Promise<number> => {
  'use server';
  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/cart/count`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  //   next: { tags: ['cartCount'] },
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch cart count');
  // }
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

export async function fetchCartItemList(): Promise<cartItemType[]> {
  const res = await fetch('http://localhost:3100/carts', {
    method: 'GET',
    next: { tags: ['checkCart, addCart, cartCount'] },
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch cart item list');
  }
  // console.log('res', res);
  const data = await res.json();
  return data;
}
