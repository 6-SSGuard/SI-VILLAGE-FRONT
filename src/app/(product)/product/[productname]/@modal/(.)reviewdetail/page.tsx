import React from 'react';
import ReviewModal from './modal';

async function page({
  params,
  searchParams,
}: {
  params: { productName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const currentPage = searchParams.page ? (searchParams.page as string) : '1';

  return (
    <ReviewModal>
      <div className="w-full h-full bg-red-400">test</div>
    </ReviewModal>
  );
}

export default page;
