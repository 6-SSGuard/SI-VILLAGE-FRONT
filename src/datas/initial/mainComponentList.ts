import AdCarousel from '@/components/icons/common/AdCarousel';
import MainCardBanner from '@/components/pages/main/MainCardBanner';
import MainCategoryList from '@/components/pages/main/MainCategoryList';
import MainHotDeal from '@/components/pages/main/MainHotDeal';

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
    name: 'AdCarousel',
    component: AdCarousel,
  },
  {
    id: 4,
    name: 'MainHotDeal',
    component: MainHotDeal,
  },
];

interface mainComponentListType {
  id: number;
  name: string;
  component: React.FC;
}
