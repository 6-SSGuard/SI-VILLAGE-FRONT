import MySizeBeautiInfo from '@/components/pages/mypage/MySizeBeautiInfo';
import React from 'react';
import {
  getBeautyInfo,
  postBeautyInfo,
} from '@/actions/mypage/beautyInfoAction';
import {
  beautyInfoCreateDataRequest,
  sizeCreateDataRequest,
} from '@/types/mypage/mypageType';
import { commonResType } from '@/types/auth/authType';
import { getSizeInfo, postSizeInfo } from '@/actions/mypage/sizeInfoAction';

async function page() {
  const beautyInfo: commonResType<beautyInfoCreateDataRequest> =
    await getBeautyInfo();

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

  const sizeInfo: commonResType<sizeCreateDataRequest> = await getSizeInfo();
  // console.log('sizeInfo', sizeInfo);

  const handlePostSizeInfo = async (formData: FormData) => {
    'use server';
    const formDataToBeautyInfo = (
      formData: FormData
    ): sizeCreateDataRequest => ({
      height: Number(formData.get('height')) || 0,
      weight: Number(formData.get('weight')) || 0,
      topSize: formData.get('topSize') as string,
      bottomSize: formData.get('bottomSize') as string,
      shoeSize: formData.get('shoeSize') as string,
    });

    const sizeInfoData = formDataToBeautyInfo(formData);
    // console.log('size', formData);
    try {
      const res = await postSizeInfo(sizeInfoData);
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
        handlePostSizeInfo={handlePostSizeInfo}
      />
    </main>
  );
}

export default page;
