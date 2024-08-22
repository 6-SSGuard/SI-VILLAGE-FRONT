"use client";
import React from "react";
import { Button } from "../ui/button";
import NecessaryField from "../signup/NecessaryField";
import SelectField from "../signup/SelectField";
import MarketingField from "../signup/MarketingField";
import TermsOfUseField from "../signup/TermsOfUseField";

export type TermKeys = "termAll" | "1" | "2" | "3" | "4";
export default function SignUpForm() {
  return (
    <form className="mx-4 flex flex-col gap-2">
      {/* 필수항목 */}
      <NecessaryField />
      <div className=" gray-bar bg-gray-200 h-1 w-full my-6"></div>
      {/* 선택항목 */}
      <SelectField />
      {/* 마케팅 수신 */}
      <MarketingField />
      <div className="bg-gray-200 h-1 my-6"></div>
      {/* 이용약관 */}
      <TermsOfUseField />
      <Button type="submit" className="w-full my-4 font-semibold">
        약관동의 및 가입완료
      </Button>
    </form>
  );
}
