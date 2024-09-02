// MembershipRankList.tsx
import React from 'react';
import MembershipRankItem from './MembershipRankItem';

const MembershipRankList: React.FC = () => {
  return (
    <ul>
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_diamond.png"
        badgeAlt="DIAMOND"
        badgeText="DIAMOND"
        title="연간 3,000만원 이상 구매회원"
        onlineBenefits={[
          'e포인트 5% 추가적립',
          '무료 교환/반품(무제한)',
          '생일혜택 20% 할인 (최대 할인 한도 100만원)',
        ]}
        offlineBenefits={[
          '15% 할인 (년 2회, 최대 할인 한도 100만원)',
          '생일혜택 15% 할인 (최대 할인 한도 100만원)',
        ]}
      />
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_platinum.png"
        badgeAlt="PLATINUM"
        badgeText="PLATINUM"
        title="연간 1,000만원 이상 구매회원"
        onlineBenefits={[
          'e포인트 2% 추가적립',
          '무료 교환/반품 (월 3회)',
          '생일혜택 10% 할인 (최대 할인 한도 50만원)',
        ]}
        offlineBenefits={[
          '10% 할인 (년 2회, 최대 할인 한도 50만원)',
          '생일혜택 10% 할인 (최대 할인 한도 50만원)',
        ]}
      />
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_gold.png"
        badgeAlt="GOLD"
        badgeText="GOLD"
        title="연간 300만원 이상 구매회원"
        onlineBenefits={[
          'e포인트 1% 추가적립',
          '무료 교환/반품 (월 1회)',
          '생일혜택 10% 할인 (최대 할인 한도 10만원)',
        ]}
        offlineBenefits={[
          '10% 할인 (년 2회, 최대 할인 한도 10만원)',
          '생일혜택 10% 할인 (최대 할인 한도 10만원)',
        ]}
      />
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_silver.png"
        badgeAlt="SILVER"
        badgeText="SILVER"
        title="연간 50만원 이상 구매회원"
        onlineBenefits={[
          '생일혜택 10% 할인 (최대 할인 한도 10만원)',
          'e포인트 1만점 적립 (승급시 1회)',
        ]}
        offlineBenefits={['생일혜택 10% 할인 (최대 할인 한도 10만원)']}
      />
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_family.png"
        badgeAlt="FAMILY"
        badgeText="FAMILY"
        title="연간 1회 이상 구매회원"
        onlineBenefits={['e포인트 3천점 적립 (승급시 1회)']}
        offlineBenefits={[]}
      />
      <MembershipRankItem
        badgeSrc="//cdn-mo.sivillage.com/mo/assets/comm/image/badge_welcome.png"
        badgeAlt="WELCOME"
        badgeText="WELCOME"
        title="신세계인터내셔날 회원 가입 시"
        onlineBenefits={['e포인트 5천점 적립 (가입시 1회)']}
        offlineBenefits={['WELCOME 10% 할인 (최대 할인 한도 20만원)']}
      />
    </ul>
  );
};

export default MembershipRankList;
