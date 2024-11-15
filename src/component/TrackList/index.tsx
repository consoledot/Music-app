import PlayIcon from "@/icons/playIcon";
import { useAppStore } from "@/store/hook";
import { FC } from "react";
import cn from "classnames";
import VolumeIcon from "@/icons/volumeIcon";
import PauseIcon from "@/icons/pauseIcon";

interface TrackProps {
  id: number;
  title: string;
  duration: string;
  preview: string;
  position: number;
  onClick: VoidFunction;
  artist_name: string;
}
export const Track: FC<TrackProps> = (props) => {
  const {
    state: { currentTrack },
  } = useAppStore();
  return (
    <div
      className={cn(
        "flex justify-between w-full items-center group hover:cursor-pointer p-2",
        {
          "bg-[#212121] border-b-2 border-opacity-50 border-b-red-50":
            currentTrack?.data?.id === props?.id,
        }
      )}
      onClick={props.onClick}
    >
      <div className="flex gap-4 items-center">
        <div className="w-5 flex place-items-center transition-all ">
          <p className="text-lg font-semibold 7 block md:group-hover:hidden m-auto w-full">
            {currentTrack?.data?.id === props?.id ? (
              <VolumeIcon fill="white" />
            ) : (
              props.position
            )}
          </p>
          {currentTrack?.data?.id === props?.id &&
          currentTrack?.state == "play" ? (
            <PauseIcon className="hidden md:group-hover:block m-auto w-full" fill="white" />
          ) : (
            <PlayIcon
              className="hidden md:group-hover:block m-auto w-full"
              fill="white"
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className=" ">{props.title}</p>
          <p className=" opacity-60">{props?.artist_name}</p>
        </div>
      </div>
      <div>
        <p className=" opacity-60">{props.duration}</p>
      </div>
    </div>
  );
};
