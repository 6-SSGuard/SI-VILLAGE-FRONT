import { dealCardDataType } from '@/types/domainTypes';
import Image from 'next/image';
import Badge from '@/components/ui/badge';
function dealPage({ deal }: { deal: dealCardDataType[] }) {
  //현재 시간
  const currentDate = new Date();

  //총 시간
  const full_time = new Date();
  full_time.setHours(24, 0, 0, 0);

  //남은 시간
  const ref_time = full_time.getTime() - currentDate.getTime();

  const sec = Math.floor((ref_time / 1000) % 60);
  const min = Math.floor((ref_time / 1000 / 60) % 60);
  const hours = Math.floor(ref_time / (1000 * 60 * 60));
  const time = `${hours} : ${min} : ${sec}`;

  return (
    <div className="w-full mt-2">

      {deal.map((dealItem) => (
        <div key={dealItem.id} className="mt-8 px-6">
          {/* 타이머 영역 */}
          <p className="bg-black h-9 text-white text-center text-sm font-bold flex items-center justify-center">
            {time} 남음
          </p>
          {/* 이미지 영역 */}
          <div className="flex justify-center mt-4">
            <Image
              src={dealItem.dealImageUrl}
              alt="deal image"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>

          {/* 할인 정보 및 배지 영역 */}
          <div className="mt-3 px-6">
            <div className="flex items-center mt-3">
              <p className="text-base font-bold text-orange-500">
                {dealItem.discountRate}%
              </p>
              <p className="font-bold text-base ml-2">
                {dealItem.discountPrice}원
              </p>
            </div>
            <div className="flex items-center mt-1">
              <p className="text-xs">{dealItem.brandName}</p>
              <p className="text-xs ml-1">{dealItem.brandTitle}</p>
            </div>
            <ul className="flex gap-1 mt-2">
              {dealItem.badgeList.map((badge, index) => (
                <Badge key={index} badgeText={badge} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default dealPage;
