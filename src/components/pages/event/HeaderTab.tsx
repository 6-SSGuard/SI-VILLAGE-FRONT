import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
function HeaderTab() {
  return (
    <div className="w-full h-44 flex flex-row items-center">
      <div className="flex-flex-col justify-center">
        <Tabs className="w-full h-20 flex justify-start items-center">
          <TabsList className="">
            <Link href="/event">
              <TabsTrigger
                className="ml-8 bg-black w-20 h-20 font-bold text-white text-lg rounded-full"
                value={'Home'}
              >
                All
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>

        <p className="ml-16 mt-2 text-xs font-bold">전체</p>
      </div>
    </div>
  );
}

export default HeaderTab;
