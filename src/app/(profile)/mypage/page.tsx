import MyActiveInfo from "@/components/pages/mypage/MyActiveInfo";
import MyBenefitInfo from "@/components/pages/mypage/MyBenefitInfo";
import MyInfoManagement from "@/components/pages/mypage/MyInfoManagement";
import MyInterestInfo from "@/components/pages/mypage/MyInterestInfo";
import MyPageDeliveryInfo from "@/components/pages/mypage/MyPageDeliveryInfo";
import MyPageProfile from "@/components/pages/mypage/MyPageProfile";
import MyShoppingInfo from "@/components/pages/mypage/MyShoppingInfo";
import React from "react";

export default function page() {
  return (
    <>
      <MyPageProfile />
      <MyPageDeliveryInfo />
      <MyShoppingInfo />
      <MyBenefitInfo />
      <MyActiveInfo />
      <MyInterestInfo />
      <MyInfoManagement />
    </>
  );
}
