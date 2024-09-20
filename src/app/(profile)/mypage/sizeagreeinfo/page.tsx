import MySizeBeautiInfo from '@/components/pages/mypage/MySizeBeautiInfo';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';
import React from 'react';
import { getBeautyInfo } from '@/actions/beautyInfoAction';

async function page() {
  const session = await getServerSession(options);
  const beautyInfo = await getBeautyInfo(session?.user.accessToken);
  console.log('t', beautyInfo);

  // console.log('tttT', session?.user.accessToken);
  return (
    <main>
      <MySizeBeautiInfo />
    </main>
  );
}

export default page;
