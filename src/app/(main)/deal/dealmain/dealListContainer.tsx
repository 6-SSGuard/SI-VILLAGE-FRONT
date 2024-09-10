import DealPage from '@/components/pages/deal/DealForm';
import { dealCardDataType } from '@/types/domainTypes';
import React from 'react';

function dealPage({ dealListData }: { dealListData: dealCardDataType[] }) {
  return (
    <section>
      <ul>
        <DealPage deal={dealListData} />
      </ul>
    </section>
  );
}

export default dealPage;
