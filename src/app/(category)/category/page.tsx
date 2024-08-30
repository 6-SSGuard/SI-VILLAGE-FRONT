import CategoryHeader from "@/components/pages/category/CategoryHeader";
import CategorySide from "@/components/pages/category/CategorySide";
import React from "react";

function page() {
  return (
    <main className="h-screen overflow-hidden">
      <CategoryHeader />
      <CategorySide />
    </main>
  );
}

export default page;
