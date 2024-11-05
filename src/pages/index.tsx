import { Card } from "@/components/card";
import { HorizontalLayout } from "@/ui/horizontalLayout";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-2xl m-auto p-3  ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-semibold">New Release</h1>
          <HorizontalLayout>
            <Card />
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
            <Card />
          </HorizontalLayout>
        </div>
      </div>
    </div>
  );
}
