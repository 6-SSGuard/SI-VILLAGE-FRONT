'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import MyBeautiForm from '@/components/forms/mypage/MyBeautiForm';
import MySizeForm from '@/components/forms/mypage/MySizeForm';
import { Button } from '@/components/ui/button';
import InfoAgree from './InfoAgree';
import {
  beautyInfoCreateDataRequest,
  sizeCreateDataRequest,
} from '@/types/mypage/mypageType';

export interface ComponentProps {
  beautyinfo: beautyInfoCreateDataRequest;
}
function MySizeBeautiInfo({
  beautyinfo,
  sizeinfo,
  handlePostBeautyInfo,
  handlePostSizeInfo,
}: {
  beautyinfo: beautyInfoCreateDataRequest;
  sizeinfo: sizeCreateDataRequest;
  handlePostBeautyInfo: (formData: FormData) => void;
  handlePostSizeInfo: (formData: FormData) => void;
}) {
  const [activeTab, setActiveTab] = useState('size');

  const handleEdit = () => {
    // 수정 로직 구현
    console.log('수정 버튼 클릭');
  };

  const handleDelete = () => {
    // 삭제 로직 구현
    console.log('삭제 버튼 클릭');
  };

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
            activeTab === 'size'
              ? 'border-b-2 border-black'
              : 'text-si-text-gray'
          } pb-2 w-full`}
        >
          나의 사이즈
        </TabsTrigger>

        <TabsTrigger
          value="beautiInfo"
          className={`${
            activeTab === 'beautiInfo'
              ? 'border-b-2 border-black '
              : 'text-si-text-gray'
          } pb-2 w-full`}
        >
          나의 뷰티정보
        </TabsTrigger>
      </TabsList>
      <TabsContent value="size">
        <form
          className="flex flex-col items-center"
          action={handlePostSizeInfo}
        >
          <MySizeForm sizeinfo={sizeinfo} />
          <InfoAgree />
          <Button
            className="w-11/12 h-12 mb-20 bg-si-131922 text-white font-semibold"
            type="submit"
          >
            나의 사이즈 등록
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="beautiInfo">
        <form
          className="flex flex-col items-center"
          action={handlePostBeautyInfo}
        >
          <MyBeautiForm beautyinfo={beautyinfo} />
          <InfoAgree />
          {beautyinfo ? (
            <div className="flex justify-between w-11/12 mb-20">
              <Button
                className="w-[48%] h-12 bg-si-787878 text-white font-semibold"
                type="button"
                onClick={handleDelete}
              >
                삭제
              </Button>
              <Button
                className="w-[48%] h-12 bg-si-131922 text-white font-semibold border border-si-131922"
                type="button"
                onClick={handleEdit}
              >
                나의 뷰티정보 수정
              </Button>
            </div>
          ) : (
            <Button
              className="w-11/12 h-12 mb-20 bg-si-131922 text-white font-semibold"
              type="submit"
            >
              나의 뷰티정보 등록
            </Button>
          )}
        </form>
      </TabsContent>
    </Tabs>
  );
}

export default MySizeBeautiInfo;
