import { TrackList } from "@/components/TrackList";
import Image from "next/image";
import Link from "next/link";

const img =
  "https://9jaclassic.com.ng/wp-content/uploads/2024/10/Anendlessocean-OCTAGON.jpg";

export default function Playlist() {
  return (
    <div>
      <div className="max-w-screen-lg m-auto pt-28">
        <div className=" flex flex-col md:grid gap-1 grid-cols-3">
          <div className=" flex flex-col gap-4 place-items-center">
            <Link href={""} className="hover:underline">
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
          </div>
          <div className="col-span-2 p-1 flex flex-col gap-3">
            <TrackList />
            <TrackList />
          </div>
        </div>
      </div>
    </div>
  );
}
