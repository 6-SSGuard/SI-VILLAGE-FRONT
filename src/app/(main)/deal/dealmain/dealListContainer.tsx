import DealPage from '@/components/pages/deal/DealForm';
import { dealCardDataType } from '@/types/domainTypes';
import React from 'react';

function dealPage({ dealListData }: { dealListData: dealCardDataType[] }) {
  return (
    <section>
      <ul>
        {dealListData.map((deal: dealCardDataType) => (
          <DealPage key={deal.id} deal={deal} />
        ))}
      </ul>
    </section>
  );
}

export default dealPage;
