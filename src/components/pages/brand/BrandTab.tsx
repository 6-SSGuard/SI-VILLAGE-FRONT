'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import React, { useState } from 'react';
import Search from '@/components/pages/brand/Search';
import LikeBrand from './LikeBrand';
import { BrandDataType } from '@/actions/brandAction';

function BrandTab({ brandData }: { brandData: BrandDataType[] }) {
  const [activityContent, setContent] = useState('az');

  return (
    <div className="w-full max-w-lg mx-auto">
      <Tabs defaultValue="az" className="w-full">
        <TabsList className="flex bg-gray-100 overflow-hidden sticky top-0 ">
          <TabsTrigger
            className={`w-1/2 py-2 font-bold text-center transition-all ${
              activityContent === 'az'
                ? 'bg-white text-black border-b-2 border-black'
                : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
            }`}
            value="az"
            onClick={() => setContent('az')}
          >
            A - Z
          </TabsTrigger>
          <TabsTrigger
            className={`w-1/2 py-2 font-bold text-center transition-all ${
              activityContent === 'myfavor'
                ? 'bg-white text-black border-b-2 border-black'
                : 'bg-white text-gray-300 border-b-[1px] border-gray-300'
            }`}
            value="myfavor"
            onClick={() => setContent('myfavor')}
          >
            My Favorite
          </TabsTrigger>
        </TabsList>
        <TabsContent value="az">
          <>
            <Search brandData={brandData} />
          </>
        </TabsContent>
        <TabsContent value="myfavor">
          <>
            <LikeBrand brandData={brandData} />
          </>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BrandTab;
