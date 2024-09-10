'use client';
import React, { useState } from 'react';
import { categoryimages } from '@/components/pages/main/MainCategoryList';
import { Tabs } from '@/components/ui/tabs';
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import StoreCategoryList from './StoreCategoryList';

function StoreTab() {
  const [activeTab, setActiveTab] = useState('전체'); // Set the first label as default active tab
  const filteredCategories = [
    { label: '전체' },
    ...categoryimages.slice(1, -1),
  ];

  const visibleCategories =
    activeTab === '전체'
      ? categoryimages.slice(1, -1) // Show all categories excluding first and last
      : categoryimages.filter((category) => category.label === activeTab);

  return (
    <>
      <nav className="sticky top-0 z-20 bg-white border-b">
        <Tabs
          className="w-full flex justify-center items-center"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="overflow-x-auto whitespace-nowrap scrollbar-hide px-5 space-x-5 mt-2">
            {filteredCategories.map((category) => (
              <TabsTrigger
                key={category.label}
                value={category.label}
                className={`${
                  activeTab === category.label
                    ? 'border-b-2 border-black'
                    : 'text-[#929292]'
                } pb-2`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>
      <StoreCategoryList categories={visibleCategories} />
    </>
  );
}

export default StoreTab;
