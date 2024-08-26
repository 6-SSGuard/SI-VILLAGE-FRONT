import React from "react";
import MainTab from "@/components/pages/main/MainTab";
import Footer from "@/components/layouts/Footer";
import BottomTabBar from "@/components/layouts/BottomTabBar";
import AuthServiceHeader from "@/components/layouts/AuthServiceHeader";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthServiceHeader />
      <MainTab />
      {children}
      <footer className="pb-12 bg-gray-100 text-black mt-4">
        <Footer />
      </footer>

      <BottomTabBar />
    </>
  );
}
