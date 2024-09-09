import React from 'react';
import { PhotoData } from '@/datas/DetailDatas';
import { ReviewListData } from '@/datas/DetailDatas';
import DetailReviewList from '@/components/pages/detail/DetailReviewList';
import { DetailReviewListType } from '@/types/detail/detailReviewListType';
import { DetailPhotoReviewListType } from '@/types/detail/detailReviewPhotoType';

async function getPhotoReviewImageListDatas() {
  const photoData = await PhotoData;
  return photoData;
}

async function getReviewListDatas() {
  const ListData = await ReviewListData;
  return ListData;
}

async function page() {
  const Photo: DetailPhotoReviewListType = await getPhotoReviewImageListDatas();
  const ListData: DetailReviewListType = await getReviewListDatas();

  return (
    <div className="flex-col overflow-auto">
      <DetailReviewList
        photoData={Photo.data}
        ListData={ListData.data}
        count={ListData.allCount}
      />
    </div>
  );
}

export default page;
