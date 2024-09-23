'use client';
import Badge from '@/components/ui/badge';
import { dealCardDataType } from '@/types/domainTypes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function DealForm({ deal }: { deal: dealCardDataType[] }) {
  // 시간을 계산하는 함수
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // 자정 설정

    const difference = midnight.getTime() - now.getTime(); // 자정까지 남은 시간 계산
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // 시간을 한 줄로 포맷팅
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="w-full mt-2">
      {deal.map((dealItem) => (
        <div key={dealItem.id} className="mt-8 px-6">
          <div className="w-full text-center text-white bg-black py-2">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="https://ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com/clock.png"
                alt="시간 아이콘"
                width={20}
                height={20}
              />
              <p className="text-sm font-bold">
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds} 남음
              </p>
            </div>
          </div>
          {/* 이미지 영역 */}
          <div className="flex justify-center">
            <Image
              src={dealItem.dealImageUrl}
              alt={dealItem.brandTitle}
              width={350}
              height={350}
              className="object-cover"
            />
          </div>

          {/* 할인 정보 및 배지 영역 */}
          <div className="p-[17px_8px]">
            <div className="flex items-center mb-[5px]">
              <p className="text-base font-bold text-[#D99C63]">
                {dealItem.discountRate}%
              </p>
              <p className="font-bold text-base ml-2">
                {dealItem.discountPrice.toLocaleString()}원
              </p>
            </div>

            <p className="text-xs mb-3">{dealItem.brandTitle}</p>

            <ul className="flex gap-1">
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

export default DealForm;
