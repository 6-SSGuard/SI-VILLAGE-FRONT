import AdCarousel from '@/components/icons/common/AdCarousel';
import MainCardBanner from '@/components/pages/main/MainCardBanner';
import MainCarousel from '@/components/pages/main/MainCarousel';
import MainHotDeal from '@/components/pages/main/MainHotDeal';
import MainNewCollection from '@/components/pages/main/MainNewCollection';
import { dealDatas } from '@/datas/dummys/dealDatas';
import { dealListDataType } from '@/types/domainTypes';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import ProductQnA from '@/components/pages/product/ProductQnA';
import MainCategoryList from '@/components/pages/main/MainCategoryList';
// import { mainComponentList } from '@/datas/initial/mainComponentList';
// import { createElement, Suspense } from 'react';
// import MotionSectionWithMain from '@/components/pages/main/MotionSectionWithMain';

async function getDealData() {
  const res = await dealDatas;
  // console.log(res);

  return res;
}

async function page() {
  const session = await getServerSession(options);
  if (!session) return null;
  console.log('next auth server session', session.user);

  const Data: dealListDataType = await getDealData();
  return (
    <main className="min-h-screen">
      {/* {mainComponentList.map((component: any) => (
        <Suspense key={component.id} fallback={<div>skeleton</div>}>
          <MotionSectionWithMain
            component={createElement(component.component, {})}
          />
        </Suspense>
      ))} */}
      <MainCarousel />
      <MainCategoryList />
      <MainCardBanner />
      <MainNewCollection />
      <AdCarousel />
      <MainHotDeal dealData={Data.data} />
      <ProductQnA />
    </main>
  );
}

export default page;
