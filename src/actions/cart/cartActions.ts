'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

// 장바구니 조회
export async function getCartById(cartId: number) {
  const session = await getServerSession(options);

  if (!session?.user.accessToken) {
    throw new Error('토큰 없다');
  }

  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/cart/member/${cartId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.user.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error;
  }
}

// 장바구니 수정
// export async function updateCartById(cartId: number, cartData: any) {
//   const session = await getServerSession(options);
//   const response = await fetch(
//     `${process.env.API_BASE_URL}/api/cart/member/${cartId}`,
//     {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${session?.user.accessToken}`,
//       },
//       body: JSON.stringify(cartData),
//     }
//   );
//   const data = await response.json();
//   return data.result;
// }

// 장바구니 삭제
// export async function deleteCartById(cartId: number) {
//   const session = await getServerSession(options);
//   const response = await fetch(
//     `${process.env.API_BASE_URL}/api/cart/member/${cartId}`,
//     {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${session?.user.accessToken}`,
//       },
//     }
//   );
//   const data = await response.json();
//   return data.result;
// }

// 장바구니 토글
export async function toggleCartItem(cartId: number) {
  const session = await getServerSession(options);
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/cart/member/${cartId}/toggle`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.result;
}

// 장바구니 추가
export async function addCartItem(cartData: any) {
  const session = await getServerSession(options);
  const response = await fetch(`${process.env.API_BASE_URL}/api/cart/member`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.user.accessToken}`,
    },
    body: JSON.stringify(cartData),
  });
  const data = await response.json();
  return data.result;
}

// 장바구니 수량 변경
export async function increaseCartItem(cartId: number) {
  const session = await getServerSession(options);
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/cart/member/increase/${cartId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.result;
}

// 회원 장바구니 id 조회
export async function getCartItemIds() {
  const session = await getServerSession(options);
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/cart/member/ids`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.result;
}

// 장바구니 수량 조회(메인페이지)
export async function getCartItemCount() {
  const session = await getServerSession(options);
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/cart/member/count`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data.result;
}

// apiClient.ts
// import { getServerSession } from 'next-auth';

// interface FetchOptions {
//   method: string;
//   endpoint: string;
//   data?: any;
// }

// async function apiClient({ method, endpoint, data }: FetchOptions) {
//   const session = await getServerSession(options);
//   const token = session?.user.accessToken;

//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   };

//   const fetchOptions: RequestInit = {
//     method,
//     headers,
//   };

//   if (data) {
//     fetchOptions.body = JSON.stringify(data);
//   }

//   const response = await fetch(`${process.env.API_BASE_URL}${endpoint}`, fetchOptions);
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
//   }

//   const result = await response.json();
//   return result.result;  // 공통적으로 반환되는 result 사용
// }

// export default apiClient;

// export async function getCartById(cartId: string) {
//   return apiClient({
//     method: 'GET',
//     endpoint: `/api/cart/member/${cartId}`,
//   });
// }
