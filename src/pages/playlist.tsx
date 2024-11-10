import { Track } from "@/components/TrackList";
import PlayIcon from "@/icons/playIcon";

import { useAppStore } from "@/store/hook";
import { useQuery } from "@/store/query";
import { formatDuration } from "@/utils";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Playlist() {
  const {
    state: { playlist },
  } = useAppStore();
  const { getPlaylist } = useQuery();

  const router = useRouter();

  useEffect(() => {
    // if (!(router.query.id as string)) {
    //   router.push("/");
    //   return;
    // }
    getPlaylist(Number(router.query.id as string));
  }, [router.query.id]);

  return (
    <div>
      <div className="max-w-screen-lg m-auto pt-28">
        <div className=" flex flex-col md:grid gap-1 grid-cols-3">
          <div className=" flex flex-col gap-4 place-items-center ">
            {/* <Link href={""} className="hover:underline flex items-center gap-1">
              <figure className=" relative h-[15px]  w-[15px]">
                <Image
                  src={img}
                  fill
                  alt="image"
                  sizes="()"
                  className="rounded-sm h-full z-0"
                />
              </figure>
              {playlist?.title}
            </Link> */}
            <figure className="relative h-[150px] md:h-[250px] w-[150px] md:w-[250px] group ">
              <Image
                src={playlist?.picture_xl ?? "/placeholder.jpeg"}
                fill
                alt="image"
                sizes="()"
                className="rounded-md h-full z-0"
              />
            </figure>
            <p className="text-4xl uppercase text-center">{playlist?.title}</p>
            <div className="flex flex-col opacity-75 items-center">
              <p className="">Playlist • 2024</p>
              <p>
                {playlist?.nb_tracks} songs{" "}
                {playlist?.duration
                  ? "• " + formatDuration(playlist?.duration).minutes
                  : null}
              </p>
            </div>
            <div>
              <div className="p-3 rounded-full bg-white flex place-items-center cursor-pointer hover:scale-105 transition-all hover:opacity-95">
                <PlayIcon className="size-[40px] text-center" fill="black" />
              </div>
            </div>
          </div>
          <div className="col-span-2 p-1 flex flex-col gap-5 md:h-[100vh] md:overflow-y-scroll  pb-[15%] md:pb-[12%]">
            {playlist?.tracks?.data.map((track, i) => (
              <Track
                key={i}
                position={i + 1}
                title={track?.title}
                duration={formatDuration(track.duration).full}
                id={track.id}
                preview={track?.preview}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
