import AdCarousel from '@/components/icons/common/AdCarousel';
import ButtonList from '@/components/pages/main/ButtonList';
import MainCardBanner from '@/components/pages/main/MainCardBanner';
import MainCarosel from '@/components/pages/main/MainCarosel';
import MainHotDeal from '@/components/pages/main/MainHotDeal';
import MainNewCollection from '@/components/pages/main/MainNewCollection';
import { dealDatas } from '@/datas/dummys/dealDatas';
import { dealListDataType } from '@/types/domainTypes';

async function getDealData() {
  const res = await dealDatas;
  // console.log(res);

  return res;
}

async function page() {
  const Data: dealListDataType = await getDealData();
  return (
    <main>
      <MainCarosel />
      <ButtonList />
      <MainCardBanner />
      <MainNewCollection />
      <AdCarousel />
      <MainHotDeal dealData={Data.data} />
    </main>
  );
}

export default page;
