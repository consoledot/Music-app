import { FC } from "react";
import Image from "next/image";
import { Track } from "@/components/TrackList";
import PlayIcon from "@/icons/playIcon";
import { formatDuration } from "@/utils";
import Link from "next/link";
import { useAppStore } from "@/store/hook";
import PauseIcon from "@/icons/pauseIcon";

interface Props {
  image: string;
  title: string;
  number: number;
  duration: number;
  id: number | undefined;
  artist?: {
    id: number;
    name: string;
    image: string;
  };
  addToQueue: VoidFunction;
  tracks: {
    position: number;
    title: string;
    duration: number;
    id: number;
    preview: string;
    onClick: VoidFunction;
    artist_name: string;
  }[];
}

export const PlaylistQueue: FC<Props> = (props) => {
  const {
    state: { currentTrack },
  } = useAppStore();
  return (
    <div>
      <div className="max-w-screen-lg m-auto pt-28">
        <div className=" flex flex-col md:grid gap-1 grid-cols-3">
          <div className=" flex flex-col gap-4 place-items-center ">
            {props?.artist ? (
              <Link
                href={""}
                className="hover:underline flex items-center gap-1"
              >
                <figure className=" relative h-[15px]  w-[15px]">
                  <Image
                    src={props.artist?.image}
                    fill
                    alt="image"
                    sizes="()"
                    className="rounded-sm h-full z-0"
                  />
                </figure>
                {props?.artist?.name}
              </Link>
            ) : null}

            <figure className="relative h-[150px] md:h-[250px] w-[150px] md:w-[250px] group ">
              <Image
                src={props.image ?? "/placeholder.jpeg"}
                fill
                alt="image"
                sizes="()"
                className="rounded-md h-full z-0"
              />
            </figure>
            <p className="text-4xl uppercase text-center">{props?.title}</p>
            <div className="flex flex-col opacity-75 items-center">
              <p className="">Playlist • 2024</p>
              <p>
                {props?.number} songs{" "}
                {props?.duration
                  ? "• " + formatDuration(props?.duration).minutes
                  : null}
              </p>
            </div>
            <div>
              <div
                className="p-3 rounded-full bg-white flex place-items-center cursor-pointer hover:scale-105 transition-all hover:opacity-95"
                onClick={props?.addToQueue}
              >
                {currentTrack?.data?.playlist_id == props?.id &&
                currentTrack?.state == "play" ? (
                  <>
                    <PauseIcon
                      className="size-[40px] text-center text-black"
                      fill="black"
                    />
                  </>
                ) : (
                  <PlayIcon className="size-[40px] text-center" fill="black" />
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 p-1 flex flex-col gap-5 md:h-[100vh] md:overflow-y-scroll  pb-[15%] md:pb-[12%]">
            {props?.tracks?.map((track, i) => (
              <Track
                key={i}
                position={i + 1}
                title={track?.title}
                duration={formatDuration(track.duration).full}
                id={track.id}
                preview={track?.preview}
                onClick={track?.onClick}
                artist_name={track?.artist_name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
