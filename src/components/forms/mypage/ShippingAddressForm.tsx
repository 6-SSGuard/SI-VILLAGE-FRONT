'use client';
import React, { useState } from 'react';
import { shippingAddressResponse } from '@/types/mypage/mypageType';
import DialogComponent from '@/components/dialog/DialogComponent';
import AddressDialog from '@/components/dialog/shipping/AddressDialog';

interface ShippingAddressFormProps {
  shippingData: shippingAddressResponse[];
}

function ShippingAddressForm({ shippingData }: ShippingAddressFormProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<{
    title: string;
    description?: string;
    contentComponent?: React.ReactNode;
  } | null>(null);

  const handleOpenDialog = (
    title: string,
    description?: string,
    contentComponent?: React.ReactNode
  ) => {
    setDialogContent({ title, description, contentComponent });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogContent(null);
  };
  return (
    <>
      <form className="p-8">
        <div className="flex justify-end gap-2 mb-4 text-sm font-semibold">
          <button
            type="button"
            className="bg-si-787878 text-white px-4 py-2 w-full h-[48px]"
            onClick={() =>
              handleOpenDialog('배송지 등록', '', <AddressDialog />)
            }
          >
            배송지 등록
          </button>
          <button
            type="button"
            className="bg-si-131922 text-white px-4 py-2 w-full h-[48px]"
            onClick={() => console.log('기본 배송지 설정')}
          >
            기본 배송지 설정
          </button>
        </div>
        <ul>
          {shippingData?.map((data) => (
            <li
              key={data.shippingAddressId}
              className="border-b border-gray-200 py-4"
            >
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <div className="w-6 h-6 relative mr-2">
                    <input
                      type="radio"
                      name="shippingAddress"
                      value={data.shippingAddressId}
                      defaultChecked={data.defaultAddress}
                      className="peer w-full h-full border border-gray-300 rounded-full checked:border-black focus:ring-0 accent-black"
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-bold">{data.recipient}</p>
                    <p className="flex items-center justify-center text-si-787878 text-xs">
                      |
                    </p>
                    <p className="text-sm text-si-787878">
                      {data.addressName}{' '}
                      {data.defaultAddress && (
                        <span className="text-si-787878 text-sm">
                          (기본배송지)
                        </span>
                      )}
                    </p>
                  </div>
                </label>
                <div>
                  <button type="button" className="text-si-787878 text-xs">
                    수정
                  </button>
                  {!data.defaultAddress && (
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
          ))}
        </ul>
      </form>
      {/* Dialog Component */}
      {dialogContent && (
        <DialogComponent
          title={dialogContent.title}
          description={dialogContent.description}
          open={dialogOpen}
          onClose={handleCloseDialog}
        >
          {dialogContent.contentComponent}
        </DialogComponent>
      )}
    </>
  );
}

export default ShippingAddressForm;
