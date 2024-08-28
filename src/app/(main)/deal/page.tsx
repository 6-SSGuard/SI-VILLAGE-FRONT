import React from 'react';
import { dealDatas } from '@/datas/dealDatas';
import {dealCardDataType, dealListDataType} from '@/types/domainTapes';
import DealPage from './dealmain/dealListContainer';

async function getDealListData() {
    const res = await dealDatas;

    return res;
}

async function dealPage({dealListData} : {dealListData:dealCardDataType[]}) {

    const data:dealListDataType = await getDealListData();

    return (

        <main>
            <DealPage dealListData={data.data} />
        </main>
    )
}

export default dealPage