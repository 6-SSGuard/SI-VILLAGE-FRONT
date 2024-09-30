import React from 'react';
import DetailProductInfo from '@/components/pages/detail/DetailProductInfo';
import { getProductCodeByProductPolicy } from '@/actions/productsAction';
import { getProductCodeByImageList } from '@/actions/productDetailActionHook';
import { getProductCodeByDetailInfo } from '@/actions/productDetailActionHook';
import { ColorIdByColor } from '@/actions/productsAction';
import { getProductCodeByOpion } from '@/actions/productsAction';

import { reviewListByProductId } from '@/actions/reviewActions';

async function page({ params }: { params: { productname: string } }) {
  //상세정보 조회
  const getdetailinfo = async () => {
    const Data = await getProductCodeByDetailInfo(params.productname);
    return Data;
  };

  const detailinfoData = await getdetailinfo();

  //색상조회
  const getColor = async () => {
    const Data = await ColorIdByColor(detailinfoData.colorId);
    return Data;
  };

  const data = await getColor();

  //썸네일 이미지 조회
  // const getdetailthumnailImage = async () => {
  //   const Data = await getProductCodeBythumnailImage(params.productname);
  //   return Data;
  // };
  // const detailthumnailImage = await getdetailthumnailImage();

  // //디테일 이미지 리스트 조회
  const getdetailImageList = async () => {
    const Data = await getProductCodeByImageList(params.productname);
    return Data;
  };

  const detailImageListData = await getdetailImageList();

  //상품정책 조회
  const getProductPolicy = async () => {
    const Data = await getProductCodeByProductPolicy(params.productname);
    return Data;
  };

  const ProductPolicyData = await getProductPolicy();

  //옵션목록
  const getOptions = async () => {
    const Data = await getProductCodeByOpion(params.productname);
    return Data;
  };
  const Options = await getOptions();

  // 리뷰 id 조회 api
  const getIdData = async () => {
    const reviewId = await reviewListByProductId(params.productname); // API 호출 결과를 배열로 받음
    return reviewId;
  };

  const reviewId = await getIdData(); // 비동기 처리 후 id 리스트를 reviewId에 저장

  return (
    <main className="flex-col overflow-auto">
      <DetailProductInfo
        detailInfoData={detailinfoData}
        detailImageData={detailImageListData}
        policyData={ProductPolicyData}
        productCode={params.productname}
        colorData={data}
        detailProductOpion={Options}
        reviewSize={reviewId.length}
      />
    </main>
  );
}

export default page;
