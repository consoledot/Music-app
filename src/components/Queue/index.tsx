import { img } from "@/lib/constant";
import Image from "next/image";
import { TrackList } from "../TrackList";

export const Queue = () => {
  return (
    <div className="flex flex-col h-[94%] lg:grid  w-full grid-cols-5 fixed top-0 translate-y-[0%] z-20 bg-black mb-[20%] overflow-y-scroll">
      <div className=" lg:col-span-3  h-full w-full flex place-items-center">
        <figure className=" group relative w-[70%] h-[70%] m-auto">
          <div className="h-[30%] w-full rounded-t-md transition-all ease-in duration-700  group-hover:bg-gradient-to-b from-[#0a0a0a] top-0 bottom-0 right-0 left-0 z-10 absolute " />
          <Image
            src={img}
            fill
            alt="image"
            sizes="()"
            className="rounded-md h-full z-0"
          />
        </figure>
      </div>
      <div className=" lg:col-span-2  lg:h-full w-full overflow-y-scroll">
        <div className=" p-1 flex flex-col gap-5 lg:h-[100vh]  lg:pt-[20%]">
          {Array(17)
            .fill(null)
            .map((_, i) => (
              <TrackList key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};
