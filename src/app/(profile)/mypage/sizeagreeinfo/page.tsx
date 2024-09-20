import MySizeBeautiInfo from '@/components/pages/mypage/MySizeBeautiInfo';
import React from 'react';
import { getBeautyInfo, postBeautyInfo } from '@/actions/beautyInfoAction';
import {
  beautyInfoCreateDataRequest,
  sizeCreateDataRequest,
} from '@/types/mypage/mypageType';
import { commonResType } from '@/types/auth/authType';
import { getSizeInfo } from '@/actions/sizeInfoAction';

async function page() {
  const beautyInfo: commonResType<beautyInfoCreateDataRequest> =
    await getBeautyInfo();

  const sizeInfo: commonResType<sizeCreateDataRequest> = await getSizeInfo();

  const handlePostBeautyInfo = async (formData: FormData) => {
    'use server';
    const formDataToBeautyInfo = (
      formData: FormData
    ): beautyInfoCreateDataRequest => ({
      skinType: formData.get('skinType') as string,
      skinTone: formData.get('skinTone') as string,
      scalpTone: formData.get('scalpTone') as string,
      beautyKeyword: formData.getAll('beautyKeyword') as string[],
    });

    const beautyInfoData = formDataToBeautyInfo(formData);
    console.log('beautyInfoData', beautyInfoData);
    try {
      const res = await postBeautyInfo(beautyInfoData);
      console.log('res', res);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <main>
      <MySizeBeautiInfo
        beautyinfo={beautyInfo?.result}
        sizeinfo={sizeInfo?.result}
        handlePostBeautyInfo={handlePostBeautyInfo}
      />
    </main>
  );
}

export default page;
