import React from 'react';
import { getShippingAddress } from '@/actions/mypage/shippingActions';
import { shippingAddressResponse } from '@/types/mypage/mypageType';
import ShippingAddressForm from '@/components/forms/mypage/ShippingAddressForm';

interface AddressResType {
  result: shippingAddressResponse[];
}

async function page() {
  const shippingData: AddressResType = await getShippingAddress();
  console.log(shippingData);
  //  위에 나누고 리스트로 출력시키기 ( 카드리스트 컴포넌트 만들기)
  // 모달 폼과 카드리스트 폼을 각각 만들기
  return (
    <main>
      <form>
        <ShippingAddressForm shippingData={shippingData?.result} />
      </form>
    </main>
  );
}

export default page;
