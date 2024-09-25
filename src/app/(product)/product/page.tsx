import React from 'react';
import { productDummy } from '@/datas/dummys/productDummy';

function page() {
  return (
    <main>
      <div
        className="overflow-auto"
        dangerouslySetInnerHTML={{ __html: productDummy }}
      />
    </main>
  );
}

export default page;
