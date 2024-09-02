'use client';
import { useRef } from 'react';
import { useState } from 'react';
import FindID_form from '@/components/forms/login/FindIDForm';
import FindPW_form from '@/components/forms/login/FindPWForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

function Page() {
  const navRef = useRef(' ');
  const [activityContent, setContent] = useState('id');

  // const renderContent = () => {
  //   // Content가 ID / PW에 따라 레이아웃이 변환
  //   if (activityContent === "id") {
  //     return <FindID_form />;
  //   } else if (activityContent === "pw") {
  //     return <FindPW_form />;
  //   }
  // };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Tabs defaultValue="id" className="w-full">
        <TabsList className="flex bg-gray-100 overflow-hidden sticky top-0">
          <TabsTrigger
            className={`w-1/2 py-2 font-bold text-center transition-all ${
              activityContent === 'id'
                ? 'bg-white text-black border-b-2 border-black'
                : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
            }`}
            value="id"
            onClick={() => setContent('id')}
          >
            아이디 찾기
          </TabsTrigger>

          <TabsTrigger
            value="pw"
            className={`w-1/2 py-2 font-bold text-center transition-all ${
              activityContent === 'pw'
                ? 'bg-white text-black border-b-2 border-black'
                : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
            }`}
            onClick={() => setContent('pw')}
          >
            비밀번호 찾기
          </TabsTrigger>
        </TabsList>
        <TabsContent value="id">
          <>
            <FindID_form />
          </>
        </TabsContent>
        <TabsContent value="pw">
          <>
            <FindPW_form />
          </>
        </TabsContent>
      </Tabs>
      {/* 슬라이드 효과 */}
    </div>
  );
}

export default Page;
