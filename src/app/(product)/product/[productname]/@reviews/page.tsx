import Link from 'next/link';
import React from 'react';

export interface reviewDataType {
  id: string;
  name: string;
  review: string;
  rating: number;
}

const reviewDatas: reviewDataType[] = [
  {
    id: '1',
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jane Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    rating: 4,
  },
  {
    id: '3',
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    rating: 3,
  },
  {
    id: '4',
    name: 'Jane Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    rating: 2,
  },
  {
    id: '5',
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    rating: 1,
  },
];

function page({ params }: { params: { productName: string } }) {
  return (
    <div>
      <div className="w-full bg-red-200">
        {reviewDatas.map((review: reviewDataType) => (
          <div key={review.id} className="flex flex-col">
            <h3>{review.name}</h3>
            <Link href={`/products/${params.productName}/reviewdetail?page=1`}>
              {review.review}
            </Link>
            <span>{review.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
