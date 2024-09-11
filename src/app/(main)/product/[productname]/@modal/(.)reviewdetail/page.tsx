import React from 'react';

import { reviewListDataType } from '@/types/ResponseTypes';
import PhotoReviewHeader from '@/components/pages/review/PhotoReviewHeader';
// import { getPhotoReview } from '@/actions/revewAction';
import ReviewModal from './modal';

async function page({
  params,
  searchParams,
}: {
  params: { productName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const resData: reviewListDataType = (await getPhotoReview(
  //   params.productName
  // )) as reviewListDataType;
  const currentPage = searchParams.page ? (searchParams.page as string) : '1';

  return (
    <ReviewModal>
      <div className="w-full h-full bg-red-400">test</div>
      {/* <PhotoReviewListContainer data = {resData}/> */}
    </ReviewModal>
  );
}

export default page;
