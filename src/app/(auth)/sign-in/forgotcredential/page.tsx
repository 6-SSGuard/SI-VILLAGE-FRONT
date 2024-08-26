"use client";
import { useRef } from "react";
import { useState } from "react";
import FindID_form from "@/components/forms/login/FindIDForm";
import FindPW_form from "@/components/forms/login/FindPWForm";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Page() {
  const navRef = useRef(" ");
  const [activityContent, setContent] = useState("id");

  const renderContent = () => {
    // Content가 ID / PW에 따라 레이아웃이 변환
    if (activityContent === "id") {
      return <FindID_form />;
    } else if (activityContent === "pw") {
      return <FindPW_form />;
    }
  };

  return (
    <div className="w-full h-min-screen">
      <div className="w-full h-12">
        <Tabs
          defaultValue="account"
          className="relative flex w-screen justify-center border-b-2"
        >
          <TabsList className="flex flex-direction justify-center mt-8 bg-white">
            <TabsTrigger
              className="flex mr-24 justify-start font-bold border-b-2"
              value="ID"
              onClick={() => setContent("id")}
            >
              아이디 찾기
            </TabsTrigger>

            <TabsTrigger
              value="password"
              className="font-bold"
              onClick={() => setContent("pw")}
            >
              비밀번호 찾기
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* 슬라이드 효과 */}
      </div>
      {renderContent()}
    </div>
  );
}

export default Page;
