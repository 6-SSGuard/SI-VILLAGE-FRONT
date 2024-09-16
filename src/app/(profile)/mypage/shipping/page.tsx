import React from 'react';
import { revalidateTag } from 'next/cache';

interface AddressType {
  id: number;
  name: string;
  addressname: string;
  address: string;
  phone: string;
  checked: boolean;
}

async function ShippingAddress() {
  // Sample data for the shipping addresses
  const myShippingAddressData: AddressType[] = [
    {
      id: 1,
      name: 'park',
      addressname: 'wlq (기본배송지)',
      address: '부산 부산진구 진남로 455 111',
      phone: '010-9918-4159',
      checked: true,
    },
    {
      id: 2,
      name: 'lee',
      addressname: '집',
      address: '서울 강남구 테헤란로 111',
      phone: '010-5678-1234',
      checked: false,
    },
    {
      id: 3,
      name: 'kim',
      addressname: '회사',
      address: '대전 서구 둔산동 45',
      phone: '010-9876-5432',
      checked: false,
    },
  ];

  const handleShippingAddressDefaultSelecter = async (formData: FormData) => {
    'use server';
    const shippingDefaultAddressUpdate = await fetch(
      'http://localhost:3000/api/shippingAddress',
      {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (shippingDefaultAddressUpdate.status === 200) {
      console.log('배송지가 변경되었습니다.');
      revalidateTag('shippingAddress');
    }
  };

  return (
    <form action={handleShippingAddressDefaultSelecter} className="p-8">
      <div className="flex justify-end gap-2 mb-4 text-sm font-semibold">
        <button className="bg-si-787878 text-white px-4 py-2 w-full h-[48px]">
          배송지 등록
        </button>
        <button className="bg-si-131922 text-white px-4 py-2 w-full h-[48px]">
          기본 배송지 설정
        </button>
      </div>
      <ul>
        {myShippingAddressData?.map((data) => {
          return (
            <li key={data.id} className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <div className="w-6 h-6 relative mr-2">
                    <input
                      type="radio"
                      name="shippingAddress"
                      value={data.id}
                      defaultChecked={data.checked}
                      className="peer w-full h-full border border-gray-300 rounded-full checked:border-black focus:ring-0 accent-black"
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-bold">{data.name}</p>
                    <p className="flex items-center justify-center text-si-787878 text-xs">
                      |
                    </p>
                    <p className="text-sm text-si-787878">{data.addressname}</p>
                  </div>
                </label>
                <div>
                  <button type="button" className="text-si-787878 text-xs">
                    수정
                  </button>
                  {!data.checked && (
                    <button
                      type="button"
                      className="text-si-787878 text-xs ml-2"
                    >
                      삭제
                    </button>
                  )}
                </div>
              </div>
              <p className="text-[#404040] text-sm m-[8px_0px_0px_32px]">
                {data.address}
              </p>
              <p className="text-si-787878 text-[13px] p-[8px_0px_0px_32px]">
                {data.phone}
              </p>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default ShippingAddress;
