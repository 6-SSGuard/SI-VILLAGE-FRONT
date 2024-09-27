import { dealDatas } from '@/datas/dummys/dealDatas';
import { dealListDataType } from '@/types/domainTypes';
import { mainComponentList } from '@/datas/initial/mainComponentList';
import { createElement, Suspense } from 'react';
import MotionSectionWithMain from '@/components/pages/main/MotionSectionWithMain';
import MainCarousel from '@/components/pages/main/MainCarousel';

async function getDealData() {
  const res = await dealDatas;
  // console.log(res);

  return res;
}

async function page() {
  // const session = await getServerSession(options);
  // if (!session) return null;
  // console.log('next auth server session', session.user);

  const Data: dealListDataType = await getDealData();
  return (
    <main className="min-h-screen">
      <MainCarousel />
      {mainComponentList.map((component: any) => (
        <Suspense key={component.id} fallback={<div>skeleton</div>}>
          <MotionSectionWithMain
            component={
              component.name === 'MainHotDeal'
                ? createElement(component.component, { dealData: Data.data })
                : createElement(component.component)
            }
          />
        </Suspense>
      ))}
    </main>
  );
}

export default page;
