import React from 'react';
import { DetailReviewInfoListType } from '@/types/detail/detailReviewType';
import { ReviewInfoData } from '@/datas/detailproductdatas';
import DetailReview from '@/components/pages/detail/DetailReview';
// import DetailReview from '@/components/pages/detail/DetailReview';

// export interface reviewDataType {
//   id: string;
//   name: string;
//   review: string;
//   rating: number;
// }

// const reviewDatas: reviewDataType[] = [
//   {
//     id: '1',
//     name: 'John Doe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
//     rating: 5,
//   },
//   {
//     id: '2',
//     name: 'Jane Doe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
//     rating: 4,
//   },
//   {
//     id: '3',
//     name: 'John Doe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
//     rating: 3,
//   },
//   {
//     id: '4',
//     name: 'Jane Doe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
//     rating: 2,
//   },
//   {
//     id: '5',
//     name: 'John Doe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
//     rating: 1,
//   },
// ];
//리뷰에 대한 정보 데이터
async function getReviewInfo() {
  const res = await ReviewInfoData;
  return res;
}

async function page({ params }: { params: { productName: string } }) {
  const ReviewData: DetailReviewInfoListType = await getReviewInfo();

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
      \
      <div className="h-full">
        <DetailReview data={ReviewData.data} count={ReviewData.count} />
      </div>
    </main>
  );
}

export default page;
