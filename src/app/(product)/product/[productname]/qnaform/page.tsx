import QnaForm from '@/components/forms/QnaForm';
import React from 'react';

function ModalForm({ params }: { params: { productname: string } }) {
  // console.log(decodeURIComponent(params.productname));
  return (
    <>
      <QnaForm productname={params.productname} />
    </>
  );
}

export default ModalForm;
