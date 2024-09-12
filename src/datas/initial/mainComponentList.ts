import AdCarousel from '@/components/icons/common/AdCarousel';
import MainCardBanner from '@/components/pages/main/MainCardBanner';
import MainCarousel from '@/components/pages/main/MainCarousel';
import MainCategoryList from '@/components/pages/main/MainCategoryList';
import MainHotDeal from '@/components/pages/main/MainHotDeal';
import MainNewCollection from '@/components/pages/main/MainNewCollection';

export const mainComponentList = [
  {
    id: 1,
    name: 'MainCategoryList',
    component: MainCategoryList,
  },
  {
    id: 2,
    name: 'MainCardBanner',
    component: MainCardBanner,
  },
  {
    id: 3,
    name: 'MainNewCollection',
    component: MainNewCollection,
  },
  {
    id: 4,
    name: 'AdCarousel',
    component: AdCarousel,
  },
  {
    id: 5,
    name: 'MainHotDeal',
    component: MainHotDeal,
  },
];

interface mainComponentListType {
  id: number;
  name: string;
  component: React.FC;
}
