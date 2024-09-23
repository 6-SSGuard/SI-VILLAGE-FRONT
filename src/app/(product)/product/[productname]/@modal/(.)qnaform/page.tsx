import React from 'react';
import QnaModal from './modal';
import QnaForm from '@/components/forms/QnaForm';

async function page({ params }: { params: { productName: string } }) {
  console.log('why', params.productName);
  return (
    <QnaModal>
      <QnaForm productname={params.productName} />
    </QnaModal>
  );
}

export default page;
