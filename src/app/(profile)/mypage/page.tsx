import MyPageDeliveryInfo from '@/components/pages/mypage/MyPageDeliveryInfo';
import MyPageProfile from '@/components/pages/mypage/MyPageProfile';
import { Metadata } from 'next';
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';
import MypageInfoList from '@/components/pages/mypage/MypageInfoList';
import SSGMembershipInfo from '@/components/pages/mypage/SSGMembershipInfo';

export const metadata: Metadata = {
  title: '마이페이지',
};
const shoppingitems = [
  { text: '주문/배송 조회', href: '#' },
  { text: '오프라인 주문 조회', href: '#' },
  { text: '취소/반품/교환 조회', href: '#' },
  { text: 'Vpay 간편결제 관리', href: '#' },
  { text: '정기배송 조회', href: '#' },
  { text: '선물함', href: '#' },
];
const profititems = [
  { text: 'S.I.포인트', href: '#' },
  { text: 'e포인트', href: '#' },
  { text: '쿠폰 내역', href: '#' },
  { text: '디지털보증서', href: '#' },
];
const MyActiveitems = [
  { text: '상품문의', href: '#' },
  { text: '1:1문의내역', href: '#' },
  { text: '이벤트 참여내역', href: '#' },
  { text: '친구추천', href: '#' },
];
const MyInterestitems = [
  { text: '관심클럽 설정', href: '#' },
  { text: '찜', href: '#' },
  { text: '재입고 알림신청 내역', href: '#' },
];
const Myinfoitems = [
  { text: '개인정보 수정', href: '#' },
  { text: '비밀번호 변경', href: '#' },
  { text: 'SNS 연결 관리', href: '#' },
  { text: '배송지/환불계좌 관리', href: '#' },
  { text: '회원탈퇴', href: '#' },
  { text: '사이즈 / 뷰티정보 설정', href: '/mypage/sizeagreeinfo' },
  { text: '로그인 정보 관리', href: '#' },
];

export default async function page() {
  const session = await getServerSession(options);
  console.log('여기요', session);

  return (
    <main>
      <MyPageProfile session={session} />
      <MyPageDeliveryInfo />
      <MypageInfoList title="나의 쇼핑정보" items={shoppingitems} />
      <MypageInfoList title="나의 혜택정보" items={profititems} />
      <MypageInfoList title="나의 활동정보" items={MyInterestitems} />
      <MypageInfoList title="나의 관심정보" items={Myinfoitems} />
      <MypageInfoList title="나의 정보관리" items={shoppingitems} />
      <SSGMembershipInfo />
    </main>
  );
}
