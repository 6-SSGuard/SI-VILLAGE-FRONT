import React from 'react';
import DetailProductInfo from '@/components/pages/detail/DetailProductInfo';
import { getProductCodeByProductPolicy } from '@/actions/productsAction';
import { getProductCodeByImageList } from '@/actions/productDetailActionHook';
import { getProductCodeByDetailInfo } from '@/actions/productDetailActionHook';
import { ColorIdByColor } from '@/actions/productsAction';

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

  console.log(data, 'test fafafafafa');
  console.log(detailinfoData.colorId, 'colorcolroaatat');

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

  // const getLikeToggle = async () => {
  //   const response = await ProductByProductLikeToggle(params.productname);
  //   return response;
  // };

  // const data = await getLikeToggle();

  return (
    <main className="flex-col overflow-auto">
      <DetailProductInfo
        detailInfoData={detailinfoData}
        detailImageData={detailImageListData}
        policyData={ProductPolicyData}
        productCode={params.productname}
        colorData={data}
      />
    </main>
  );
}

export default page;
