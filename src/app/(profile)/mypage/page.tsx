import MyActiveInfo from "@/components/mypage/MyActiveInfo";
import MyBenefitInfo from "@/components/mypage/MyBenefitInfo";
import MyInfoManagement from "@/components/mypage/MyInfoManagement";
import MyInterestInfo from "@/components/mypage/MyInterestInfo";
import MyPageDeliveryInfo from "@/components/mypage/MyPageDeliveryInfo";
import MyPageProfile from "@/components/mypage/MyPageProfile";
import MyShoppingInfo from "@/components/mypage/MyShoppingInfo";
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
