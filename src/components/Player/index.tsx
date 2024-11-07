import PrevIcon from "@/icons/backIcon";
import ChevronIcon from "@/icons/chevronIcon";
import NextIcon from "@/icons/nextIcon";
// import PauseIcon from "@/icons/pauseIcon";
import PlayIcon from "@/icons/playIcon";
import RandomIcon from "@/icons/randomIcon";
import VolumeIcon from "@/icons/volumeIcon";
import { img } from "@/lib/constant";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import Image from "next/image";
const iconProp = {
  className: "md:size-[35px] cursor-pointer opacity-95",
  fill: "white",
};
const iconProp2 = {
  className: "md:size-[25px] cursor-pointer opacity-45",
};
export const Player = () => {
  const { dispatch } = useAppStore();
  return (
    <div className="fixed  bottom-0 right-0 left-0 w-full z-30  h-[7%] md:h-[6%] bg-[#212121] items-center flex justify-center">
      <div
        className="h-[3%] absolute top-0 bg-gradient-to-r from-[#ff0033] to-[#ff278f] w-full "
        id="player:range"
      />
      <div className="flex flex-row-reverse md:flex-row  justify-between items-center w-full px-2">
        <div className="flex items-center gap-5">
          <PrevIcon
            className={
              "md:size-[35px] cursor-pointer opacity-95 hidden md:block"
            }
            fill={iconProp.fill}
          />
          <PlayIcon {...iconProp} />
          {/* <PauseIcon {...iconProp} /> */}
          <NextIcon {...iconProp} />
        </div>
        <div className="flex items-center gap-4">
          <figure
            className=" relative h-[45px] md:h-[40px] w-[45px]  md:w-[40px]"
            onClick={() => dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER })}
          >
            <Image
              src={img}
              fill
              alt="image"
              sizes="()"
              className="rounded-sm h-full z-0"
            />
          </figure>
          <div className="flex flex-col">
            <p className="uppercase font-semibold text-sm md:text-base">LNB</p>
            <p className=" md:hidden opacity-75 text-sm">Anendlessocean</p>
            <p className=" opacity-75  hidden md:block">
              Anendlessocean • OCTAGON • 2024
            </p>
          </div>
        </div>
        <div className="md:flex items-center gap-5 hidden">
          <VolumeIcon {...iconProp2} />
          <RandomIcon {...iconProp2} />
          <div onClick={() => dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER })}>
            <ChevronIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
