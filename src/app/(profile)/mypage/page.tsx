import MyPageDeliveryInfo from "@/components/mypage/MyPageDeliveryInfo";
import MyPageProfile from "@/components/mypage/MyPageProfile";
import React from "react";

export default function page() {
  return (
    <>
      <MyPageProfile />
      <MyPageDeliveryInfo />
    </>
  );
}
