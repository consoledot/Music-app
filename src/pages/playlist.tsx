import { TrackList } from "@/components/TrackList";
import PlayIcon from "@/icons/playIcon";
import { img } from "@/lib/constant";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import Image from "next/image";
import Link from "next/link";

export default function Playlist() {
  const { state, dispatch } = useAppStore();
  return (
    <div>
      <div className="max-w-screen-lg m-auto pt-28">
        <div className=" flex flex-col md:grid gap-1 grid-cols-3">
          <div
            className=" flex flex-col gap-4 place-items-center "
            onClick={() => dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER })}
          >
            {state.loading ? <p>Greyyy</p> : null}
            <Link href={""} className="hover:underline flex items-center gap-1">
              <figure className=" relative h-[15px]  w-[15px]">
                <Image
                  src={img}
                  fill
                  alt="image"
                  sizes="()"
                  className="rounded-sm h-full z-0"
                />
              </figure>
              Anendlessocean
            </Link>
            <figure className="relative h-[150px] md:h-[250px] w-[150px] md:w-[250px] group ">
              <Image
                src={img}
                fill
                alt="image"
                sizes="()"
                className="rounded-md h-full z-0"
              />
            </figure>
            <p className="text-4xl uppercase">Octagon</p>
            <div className="flex flex-col opacity-75 items-center">
              <p className="">Album • 2024</p>
              <p>17 songs • 49 minutes</p>
            </div>
            <div>
              <div className="p-3 rounded-full bg-white flex place-items-center cursor-pointer hover:scale-105 transition-all hover:opacity-95">
                <PlayIcon className="size-[40px] text-center" fill="black" />
              </div>
            </div>
          </div>
          <div className="col-span-2 p-1 flex flex-col gap-5 md:h-[100vh] md:overflow-y-scroll">
            {Array(40)
              .fill(null)
              .map((_, i) => (
                <TrackList key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
