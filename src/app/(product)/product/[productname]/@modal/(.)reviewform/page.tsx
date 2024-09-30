import React from 'react';
import ReviewModal from './modal';
import DetailAllReviewModal from '@/components/pages/detail/DetailAllReviewModal';
import { reviewListByProductId } from '@/actions/reviewActions';
import { getProductCodeByOpion } from '@/actions/productsAction';

async function page({ params }: { params: { productname: string } }) {
  //리뷰 id조회
  const getIdData = async () => {
    const reviewId = await reviewListByProductId(params.productname); // API 호출 결과를 배열로 받음
    return reviewId;
  };

  const reviewId = await getIdData(); // 비동기 처리 후 id 리스트를 reviewId에 저장

  //옵션목록
  const getOptions = async () => {
    const Data = await getProductCodeByOpion(params.productname);
    return Data;
  };
  const Options = await getOptions();

  return (
    <ReviewModal>
      <DetailAllReviewModal
        productname={params.productname}
        id={reviewId}
        detailProductOption={Options}
      />
    </ReviewModal>
  );
}

export default page;
