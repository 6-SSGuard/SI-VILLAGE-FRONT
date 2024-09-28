import React from 'react';
import QnaModal from './modal';
import QnaForm from '@/components/forms/QnaForm';

async function page({ params }: { params: { productname: string } }) {
  console.log('why', params.productname);
  return (
    <QnaModal>
      <QnaForm productname={params.productname} />
    </QnaModal>
  );
}

export default page;
