import React from 'react';
import Image from 'next/image';
import { DetailReviewInfoDataType } from '@/types/detail/detailReviewType';

function DetailPhotoReviewImageList({
  photoData,
}: {
  photoData: DetailReviewInfoDataType[];
}) {
  return (
    <div className="flex py-5 gap-1 overflow-x-auto object-cover">
      {photoData.map((item) => (
        <Image
          key={item.id}
          src="https://image.sivillage.com/upload/C00001/eval/836/202402151244836_00001.jpeg"
          width={85}
          height={85}
          alt="description"
          className="w-[85px] h-[85px] object-cover shrink-0"
        ></Image>
      ))}
    </div>
  );
}

export default DetailPhotoReviewImageList;
