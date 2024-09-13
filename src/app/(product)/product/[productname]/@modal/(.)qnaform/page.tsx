import React from 'react';
import QnaModal from './modal';
import QnaForm from '@/components/forms/QnaForm';

async function page({
  params,
  searchParams,
}: {
  params: { productName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const currentPage = searchParams.page ? (searchParams.page as string) : '1';
  console.log(params.productName);
  return (
    <QnaModal>
      <QnaForm productname={params.productName} />
    </QnaModal>
  );
}

export default page;
