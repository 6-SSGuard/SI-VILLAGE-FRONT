import React from "react";
import MainTab from "@/components/pages/main/MainTab";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainTab />
      {children}
    </>
  );
}
