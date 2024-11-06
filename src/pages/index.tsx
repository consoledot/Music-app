import { Card } from "@/components/Card";
import { HorizontalLayout } from "@/ui/horizontalLayout";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-2xl m-auto p-3  ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-semibold">New Release</h1>
          <HorizontalLayout>
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <Card key={i} />
              ))}
          </HorizontalLayout>
        </div>
      </div>
    </div>
  );
}
