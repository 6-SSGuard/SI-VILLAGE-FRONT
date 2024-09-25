import React from 'react';
import MostPeopleCard from './MostPeopleCard';
import { bestData } from '@/datas/dummys/bestDatas';
import { bestCreateListDataType } from '@/types/best/bestTypes';
async function getMostPeopleData() {
  const data = await bestData;
  return data;
}

async function MostPeopleProduct() {
  const data: bestCreateListDataType = await getMostPeopleData();
  return (
    <div className="flex-col">
      <p className="text-22 font-bold pl-8 overflow-hidden">
        사람들이 많이 본 인기상품
      </p>
      <MostPeopleCard data={data.data} />
    </div>
  );
}

export default MostPeopleProduct;
