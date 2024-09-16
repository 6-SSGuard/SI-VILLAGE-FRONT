import React from 'react';
import Link from 'next/link';
import Delivery1Icon from '@/components/icons/profile/Delivery1Icon';
import Delivery2Icon from '@/components/icons/profile/Delivery2Icon';
import Delivery3Icon from '@/components/icons/profile/Delivery3Icon';
import Delivery4Icon from '@/components/icons/profile/Delivery4Icon';
import Delivery5Icon from '@/components/icons/profile/Delivery5Icon';
import DeliveryStatusItem from '@/components/pages/mypage/DeliveryStatusItem';

export default function MyPageDeliveryInfo() {
  const deliveryStatus = [
    { icon: <Delivery1Icon />, label: '주문/결제', count: 0 },
    { icon: <Delivery2Icon />, label: '상품준비중', count: 0 },
    { icon: <Delivery3Icon />, label: '배송준비중', count: 0 },
    { icon: <Delivery4Icon />, label: '배송중', count: 0 },
    { icon: <Delivery5Icon />, label: '배송완료', count: 0 },
  ];
  return (
    <section className="bg-[#F8F8F8] p-[8px_0px_32px] rounded-md mb-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold px-4">
          <Link href="#" passHref>
            주문/배송 조회
          </Link>
        </h2>
      </header>
      <ul className="flex flex-row justify-between text-xs text-si-787878 px-4">
        {deliveryStatus.map((status, index) => (
          <DeliveryStatusItem
            key={index}
            icon={status.icon}
            label={status.label}
            count={status.count}
          />
        ))}
      </ul>
    </section>
  );
}
