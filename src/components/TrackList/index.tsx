import PlayIcon from "@/icons/playIcon";
import { FC } from "react";

interface TrackProps {
  id: number;
  title: string;
  duration: string;
  preview: string;
  position: number;
}
export const Track: FC<TrackProps> = (props) => {
  return (
    <div className="flex justify-between w-full items-center group hover:cursor-pointer px-2">
      <div className="flex gap-4 items-center">
        <div className="w-5 flex place-items-center transition-all ">
          <p className="text-lg font-semibold opacity-60 block md:group-hover:hidden m-auto w-full">
            {props.position}
          </p>
          <PlayIcon
            className="hidden md:group-hover:block m-auto w-full"
            fill="white"
          />
        </div>
        <div className="flex flex-col">
          <p className=" ">{props.title}</p>
          <p className=" opacity-60">1.5k plays</p>
        </div>
      </div>
      <div>
        <p className=" opacity-60">{props.duration}</p>
      </div>
    </div>
  );
};
