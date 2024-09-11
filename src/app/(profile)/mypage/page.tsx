import MyActiveInfo from '@/components/pages/mypage/MyActiveInfo';
import MyBenefitInfo from '@/components/pages/mypage/MyBenefitInfo';
import MyInfoManagement from '@/components/pages/mypage/MyInfoManagement';
import MyInterestInfo from '@/components/pages/mypage/MyInterestInfo';
import MyPageDeliveryInfo from '@/components/pages/mypage/MyPageDeliveryInfo';
import MyPageProfile from '@/components/pages/mypage/MyPageProfile';
import MyShoppingInfo from '@/components/pages/mypage/MyShoppingInfo';
import { Metadata } from 'next';
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: '마이페이지',
};

export default async function page() {
  const session = await getServerSession(options);
  console.log('여기요', session);

  return (
    <main>
      <MyPageProfile session={session} />
      <MyPageDeliveryInfo />
      <MyShoppingInfo />
      <MyBenefitInfo />
      <MyActiveInfo />
      <MyInterestInfo />
      <MyInfoManagement />
    </main>
  );
}
