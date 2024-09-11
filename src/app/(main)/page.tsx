import AdCarousel from '@/components/icons/common/AdCarousel';
import ButtonList from '@/components/pages/main/ButtonList';
import MainCardBanner from '@/components/pages/main/MainCardBanner';
import MainCarosel from '@/components/pages/main/MainCarosel';
import MainNewCollection from '@/components/pages/main/MainNewCollection';

function maininit() {
  return (
    <main>
      <MainCarosel />
      <ButtonList />
      <MainCardBanner />
      <MainNewCollection />
      <AdCarousel />
    </main>
  );
}

export default maininit;
