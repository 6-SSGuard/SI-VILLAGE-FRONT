import React from 'react';
import DetailProductInfo from '@/components/pages/detail/DetailProductInfo';
import DetailReview from '@/components/pages/detail/DetailReview';
import { DetailImageListData } from '@/datas/DetailDatas';
import { PhotoData } from '@/datas/DetailDatas';
import { ReviewListData } from '@/datas/DetailDatas';

import { DetailProductImageList } from '@/types/detail/detailType';
import { DetailReviewListType } from '@/types/detail/detailReviewListType';
import { DetailPhotoReviewListType } from '@/types/detail/detailReviewPhotoType';

async function getProductImageListDatas() {
  const data = await DetailImageListData;

  return data;
}

async function getPhotoReviewImageListDatas() {
  const photoData = await PhotoData;
  return photoData;
}

async function getReviewListDatas() {
  const ListData = await ReviewListData;
  return ListData;
}

async function page() {
  const Data: DetailProductImageList = await getProductImageListDatas();
  const Photo: DetailPhotoReviewListType = await getPhotoReviewImageListDatas();
  const ListData: DetailReviewListType = await getReviewListDatas();

  // console.log('data', Data);
  // console.log('data1', Data.data);
  return (
    <div className="flex-col overflow-auto">
      <DetailProductInfo data={Data.data} />
      <DetailReview photoData={Photo.data} ListData={ListData.data} />
    </div>
  );
}

export default page;
