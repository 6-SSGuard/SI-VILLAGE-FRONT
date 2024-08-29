import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Link from "next/link";

function Tab() {
  return (
    <main>
      <Tabs className="w-full h-16 flex justify-center items-center">
        <TabsList className="mt-10 overflow-x-auto whitespace-nowrap scrollbar-hide pl-5 pr-5">
          <TabsTrigger className=" m1-6" value={"Home"}>
            Home
          </TabsTrigger>
          <Link href="/event">
            <TabsTrigger className=" ml-6 " value={"Event"}>
              Event
            </TabsTrigger>
          </Link>
          <Link href="/deal">
            <TabsTrigger className=" ml-6 " value={"Deal"}>
              Deal
            </TabsTrigger>
          </Link>
          <TabsTrigger className=" ml-6 " value={"Best"}>
            Best
          </TabsTrigger>
          <TabsTrigger className=" ml-6 " value={"SILIVE"}>
            S.I.LIVE
          </TabsTrigger>
          <TabsTrigger className=" ml-6 " value={"Content"}>
            Content
          </TabsTrigger>
          <TabsTrigger className=" ml-6 " value={"SSG DF"}>
            SSG DF
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
}

export default Tab;
