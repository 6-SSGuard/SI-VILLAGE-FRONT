import ProductQnA from '@/components/pages/product/ProductQnA';
import React from 'react';

function page({ params }: { params: { productname: string } }) {
  return (
    <main>
      <ProductQnA productname={params.productname} />
    </main>
  );
}

export default page;
