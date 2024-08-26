import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

function Tab() {
  return (
    <main>
      <Tabs className="w-full flex justify-center items-center p-2">
        <TabsList className="overflow-x-auto whitespace-nowrap scrollbar-hide sticky top-0 bg-white ml-4 space-x-5">
          <TabsTrigger value={"Home"}>Home</TabsTrigger>
          <TabsTrigger value={"Event"}>Event</TabsTrigger>
          <TabsTrigger value={"Deal"}>Deal</TabsTrigger>
          <TabsTrigger value={"Best"}>Best</TabsTrigger>
          <TabsTrigger value={"SILIVE"}>S.I.LIVE</TabsTrigger>
          <TabsTrigger value={"Content"}>Content</TabsTrigger>
          <TabsTrigger value={"SSG DF"}>SSG DF</TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
}

export default Tab;
