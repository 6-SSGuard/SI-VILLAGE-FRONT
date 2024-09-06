'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import MyBeautiForm from '@/components/forms/mypage/MyBeautiForm';
import MySizeForm from '@/components/forms/mypage/MySizeForm';
import { Button } from '@/components/ui/button';
import InfoAgree from './InfoAgree';
function MySizeBeautiInfo() {
  const [activeTab, setActiveTab] = useState('size');
  return (
    <Tabs
      defaultValue="size"
      className="w-full"
      onValueChange={(value) => setActiveTab(value)}
    >
      <TabsList className="flex justify-around ">
        <TabsTrigger
          value="size"
          className={`${
            activeTab === 'size' ? 'border-b-2 border-black' : 'text-[#929292]'
          } pb-2 w-full`}
        >
          나의 사이즈
        </TabsTrigger>

        <TabsTrigger
          value="beautiInfo"
          className={`${
            activeTab === 'beautiInfo'
              ? 'border-b-2 border-black '
              : 'text-[#929292]'
          } pb-2 w-full`}
        >
          나의 뷰티정보
        </TabsTrigger>
      </TabsList>
      <TabsContent value="size">
        <form className="flex flex-col items-center">
          <MySizeForm />
          <InfoAgree />
          <Button
            className="w-11/12 h-12 mb-20 bg-[#131922] text-white font-semibold"
            type="submit"
          >
            나의 사이즈 등록
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="beautiInfo">
        <form className="flex flex-col items-center">
          <MyBeautiForm />
          <InfoAgree />
          <Button
            className="w-11/12 h-12 mb-20 bg-[#131922] text-white font-semibold"
            type="submit"
          >
            나의 뷰티정보 등록
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}

export default MySizeBeautiInfo;
