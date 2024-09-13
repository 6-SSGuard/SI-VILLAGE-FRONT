import Link from 'next/link';
import React from 'react';
import { DetailReviewInfoListType } from '@/types/detail/detailReviewType';
import { ReviewInfoData } from '@/datas/detailproductdatas';
import DetailReview from '@/components/pages/detail/DetailReview';

async function getReviewInfo() {
  const res = await ReviewInfoData;
  return res;
}

async function page({ params }: { params: { productName: string } }) {
  const ReviewData: DetailReviewInfoListType = await getReviewInfo();

  return (
    <main>
      <div className="flex overflow-auto">
        <DetailReview data={ReviewData.data} count={ReviewData.count} />
      </div>
    </main>
  );
}

export default page;
