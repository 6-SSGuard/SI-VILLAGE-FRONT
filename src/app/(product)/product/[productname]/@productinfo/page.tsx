import React from 'react';
import DetailProductInfo from '@/components/pages/detail/DetailProductInfo';

import { getProductCodeByImageList } from '@/actions/productDetailActionHook';
import { getProductCodeByDetailInfo } from '@/actions/productDetailActionHook';
import { getProductCodeBythumnailImage } from '@/actions/productDetailActionHook';
async function page({ params }: { params: { productname: string } }) {
  //상세정보 조회
  const getdetailinfo = async () => {
    const Data = await getProductCodeByDetailInfo(params.productname);
    return Data;
  };

  const detailinfoData = await getdetailinfo();

  //썸네일 이미지 조회
  const getdetailthumnailImage = async () => {
    const Data = await getProductCodeBythumnailImage(params.productname);
    return Data;
  };
  const detailthumnailImage = await getdetailthumnailImage();

  // //디테일 이미지 리스트 조회
  // const get

  return (
    <main className="flex-col overflow-auto">
      <DetailProductInfo
        detailInfoData={detailinfoData}
        detailthumnailData={detailthumnailImage}
      />
    </main>
  );
}

export default page;
