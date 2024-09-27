import { dealCardDataType } from '@/types/domainTypes';
import React from 'react';
import DealForm from './DealForm';

function DealListContainer({
  dealListData,
}: {
  dealListData: dealCardDataType[];
}) {
  return (
    <section>
      <DealForm deal={dealListData} />
    </section>
  );
}

export default DealListContainer;
