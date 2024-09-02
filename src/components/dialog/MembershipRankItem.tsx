// MembershipRankItem.tsx
import React from 'react';

interface MembershipRankItemProps {
  badgeSrc: string;
  badgeAlt: string;
  badgeText: string;
  title: string;
  onlineBenefits: string[];
  offlineBenefits: string[];
}

const MembershipRankItem: React.FC<MembershipRankItemProps> = ({
  badgeSrc,
  badgeAlt,
  badgeText,
  title,
  onlineBenefits,
  offlineBenefits,
}) => {
  return (
    <>
      <li className="flex flex-row md:flex-row items-start gap-4 p-4 border-y-2">
        <div className="flex-shrink-0 flex flex-col items-center">
          <img src={badgeSrc} alt={badgeAlt} className="w-8 h-8 items-center" />
          <p className="text-xs font-semibold text-center mt-2 min-w-[60px]">
            {badgeText}
          </p>
        </div>
        <div className="">
          <p className="text-base font-bold mb-2">{title}</p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">온라인 혜택</p>
              <ul className="list-disc list-inside text-xs text-gray-700 mt-1">
                {onlineBenefits.map((benefit, index) => (
                  <li key={index} className="my-1">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            {offlineBenefits.length > 0 && (
              <div>
                <p className="text-sm font-semibold">오프라인 혜택</p>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1">
                  {offlineBenefits.map((benefit, index) => (
                    <li key={index} className="my-1">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default MembershipRankItem;
