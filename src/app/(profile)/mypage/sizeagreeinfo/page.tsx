import MySizeBeautiInfo from '@/components/pages/mypage/MySizeBeautiInfo';
import React from 'react';
import { getBeautyInfo } from '@/actions/beautyInfoAction';
import { beautyInfoCreateDataRequest } from '@/types/mypage/mypageType';
import { commonResType } from '@/types/auth/authType';

async function page() {
  const beautyInfo: commonResType<beautyInfoCreateDataRequest> =
    await getBeautyInfo();
  console.log('t', beautyInfo);

  return (
    <main>
      <MySizeBeautiInfo beautyinfo={beautyInfo} />
    </main>
  );
}

export default page;
