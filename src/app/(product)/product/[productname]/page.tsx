import ProductList from '@/components/pages/product/ProductList';
import React from 'react';

function page() {
  const productName = decodeURIComponent('productName');
  return (
    <section>
      <h1>{productName}</h1>
    </section>
  );
}

export default page;
