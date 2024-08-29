import React from "react";
import BrandTab from "@/components/pages/brand/BrandTab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand",
};

function page() {
  return (
    <div>
      <BrandTab />
    </div>
  );
}

export default page;
