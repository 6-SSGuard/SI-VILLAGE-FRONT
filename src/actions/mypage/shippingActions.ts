// import { commonResType } from "@/types/auth/authType";
// import { shippingAddressType } from "@/types/delivery/deliveryType";
'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { shippingAddressRequest } from '@/types/mypage/mypageType';
import { getServerSession } from 'next-auth';

export async function getShippingAddress() {
  const session = await getServerSession(options);
  // console.log(session?.user.accessToken);
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/shipping-address/member`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch beauty info:', error);
    return null;
  }
}

export async function postShippingAddress(
  shippingData: shippingAddressRequest
) {
  const session = await getServerSession(options);

  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/shipping-address/member`,
      {
        method: 'POST',
        body: JSON.stringify(shippingData),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch beauty info:', error);
    return null;
  }
}

const handleShippingAddressDefaultSelecter = async (
  shippingAddressId: number,
  formData: shippingAddressRequest
) => {
  // console.log(formData);
  const shippingDefaultAddressUpdate = await fetch(
    `${process.env.API_BASE_URL}/api/shipping-address/member/${shippingAddressId}/default`,
    {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  // if (shippingDefaultAddressUpdate.status === 200) {
  //   console.log('배송지가 변경되었습니다.');
  //   revalidateTag('shippingAddress');
  // }
};
