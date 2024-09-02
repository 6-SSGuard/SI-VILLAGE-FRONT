import React from 'react';

const MembershipPoint: React.FC = () => {
  return (
    <div>
      <ul className="space-y-4 border-t-2 p-2">
        <li className="flex flex-row items-start space-x-4 ">
          <p className="font-semibold text-sm flex-shrink-0">포인트 적립</p>
          <div className="space-y-1">
            <p className="text-base font-semibold">실 결제금액의 0.5%</p>
            <p className="text-xs text-gray-500 font-semibold">
              (유효기간 2년)
            </p>
          </div>
        </li>

        <li className="flex flex-row items-start space-x-4 border-y-2 ">
          <p className="font-semibold text-sm mt-2">포인트 사용</p>
          <div className="my-2">
            <p className="text-base font-semibold">오프라인 1,000포인트 단위</p>
            <p className="text-base mt-2 font-semibold">
              S.I.VILLAGE 10포인트 단위
            </p>
            <p className="text-xs text-gray-500">(1포인트 = 1원)</p>
          </div>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        <span>멤버십 포인트 안내</span>
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        <li>
          신세계인터내셔날 포인트(S.I 포인트)는 전 브랜드에서 적립/사용이
          가능하나, 일부 면세점, 마트, 아울렛 등 입점 매장에서는 서비스가
          제한됩니다.
        </li>
        <li>
          포인트 유효기간은 적립된 시점에서 2년이며, 유효 기간 내 사용되지 않은
          포인트는 소멸 됩니다.
        </li>
        <li>
          포인트 사용은 적립된 포인트 중 가용 포인트 내에서만 사용 가능합니다.
        </li>
        <li>
          간편 가입 회원등 회원 유형에 따라 포인트 사용 서비스는 제한되며, 통합
          멤버십 회원으로 전환 시 적립된 가용 포인트는 바로 사용 가능합니다.
        </li>
        <li>
          일부 브랜드 및 매장(면세점, 마트 등)에서는 포인트 적립/사용이
          제한되며, 자세한 내용은 각 브랜드 매장에서 확인하시기 바랍니다.
        </li>
      </ul>
    </div>
  );
};

export default MembershipPoint;
