import React from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';
import ProfileHeader from './ProfileHeader';
import ProfileNavLink from './ProfileNavLink';
import ProfilePointsAndCoupon from './ProfilePointsAndCoupon';

interface MyPageProfileProps {
  session: Session | null;
}

const pointsData = [
  { label: 'S.I.포인트', value: 0, unit: 'P' },
  { label: 'e포인트', value: 0, unit: 'P' },
  { label: '쿠폰', value: 0, unit: '장' },
  { label: '리뷰', value: 0, unit: '개' },
];

export default function MyPageProfile({ session }: MyPageProfileProps) {
  const userName = session?.user?.name;

  return (
    <div className="p-4">
      <ProfileHeader userName={userName} />
      <ProfileNavLink />
      <ProfilePointsAndCoupon points={pointsData} />
    </div>
  );
}
