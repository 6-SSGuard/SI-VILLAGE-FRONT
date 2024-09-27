import React from 'react';
import { DetailReviewInfoListType } from '@/types/detail/detailReviewType';
import { ReviewInfoData } from '@/datas/detailproductdatas';
import DetailReview from '@/components/pages/detail/DetailReview';
import { reviewListByProductId } from '@/actions/reviewActions';
async function getReviewInfo() {
  const res = await ReviewInfoData;
  return res;
}

async function page({ params }: { params: { productname: string } }) {
  const ReviewData: DetailReviewInfoListType = await getReviewInfo();

  // 리뷰 id 조회 api
  const getIdData = async () => {
    const reviewId = await reviewListByProductId(params.productname); // API 호출 결과를 배열로 받음
    return reviewId;
  };

  const reviewId = await getIdData(); // 비동기 처리 후 id 리스트를 reviewId에 저장
  console.log(reviewId, '리뷰 ID 목록');

  // id 값만 추출하는 로직
  return (
    <main>
      {/* <div className="w-full bg-red-200">
        {reviewDatas.map((review: reviewDataType) => (
          <div key={review.id} className="flex flex-col">
            <h3>{review.name}</h3>
            <Link href={`/products/${params.productName}/reviewdetail?page=1`}>
              {review.review}
            </Link>
            <span>{review.rating}</span>
          </div>
        ))}
      </div> */}
      <div className="h-full">
        {reviewId.map((id, index) => (
          <DetailReview
            key={index}
            data={ReviewData.data}
            count={ReviewData.count}
            id={id}
          />
        ))}
      </div>
    </main>
  );
}

export default page;
