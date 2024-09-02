import React from 'react';
import MembershipRankList from '@/components/dialog/MembershipRankList';
import MembershipPoint from '@/components/dialog/MembershipPoint';

interface Props {
  handleOpenDialog: (
    title: string,
    description?: string,
    contentComponent?: React.ReactNode
  ) => void;
}

const MembershipInfo: React.FC<Props> = ({ handleOpenDialog }) => (
  <div>
    <div className="bg-gray-100 p-4">
      <ul className="space-y-4">
        <li>
          <p className="text-base font-bold">S.I 포인트 적립</p>
          <p className="text-gray-500 text-xs my-1">
            온/오프라인에서 제품 구매시 적립가능한 포인트 혜택
          </p>
        </li>
        <li>
          <p className="text-base font-bold">회원 등급별 혜택</p>
          <p className="text-gray-500 text-xs my-1">
            포인트 추가 적립, 할인, 생일혜택 등 다양한 등급혜택
          </p>
        </li>
        <li>
          <p className="text-base font-bold">다양한 이벤트</p>
          <p className="text-gray-500 text-xs my-1">
            다양한 이벤트와 쇼핑혜택 소식 제공
          </p>
        </li>
      </ul>
    </div>
    <div className="rounded-md mt-2">
      <div className="flex gap-2 py-1">
        <button
          className="border border-gray-300 text-gray-600 w-48 py-2 font-semibold text-xs"
          onClick={() =>
            handleOpenDialog(
              '멤버십 회원 등급 안내',
              '신세계인터내셔날 회원등급 및 혜택',
              <MembershipRankList />
            )
          }
        >
          회원등급 혜택 자세히보기
        </button>
        <button
          className="border border-gray-300 text-gray-600 w-48 py-2 font-semibold text-xs"
          onClick={() =>
            handleOpenDialog(
              '통합 멤버십 포인트 안내',
              '신세계인터내셔날 통합 멤버십 포인트 안내',
              <MembershipPoint />
            )
          }
        >
          통합 멤버십 포인트 자세히보기
        </button>
      </div>
    </div>
  </div>
);

export default MembershipInfo;
