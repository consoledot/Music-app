import PrevIcon from "@/icons/backIcon";
import ChevronIcon from "@/icons/chevronIcon";
import NextIcon from "@/icons/nextIcon";
import PauseIcon from "@/icons/pauseIcon";
import PlayIcon from "@/icons/playIcon";
import RandomIcon from "@/icons/randomIcon";
import VolumeIcon from "@/icons/volumeIcon";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import Image from "next/image";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { getPercentage } from "@/utils";
const iconProp = {
  className: "md:size-[35px] cursor-pointer opacity-95",
  fill: "white",
};
const iconProp2 = {
  className: "md:size-[25px] cursor-pointer opacity-45",
};
export const Player = () => {
  const {
    dispatch,
    state: { openQueue, currentTrack, queue },
  } = useAppStore();
  const player = useRef<HTMLAudioElement | null>(null);

  const [range, setRange] = useState(0);

  useEffect(() => {
    if (currentTrack.state == "play") {
      player.current?.play();
    } else if (currentTrack.state == "pause") {
      player.current?.pause();
    }

    if (currentTrack.loading) {
      player.current?.pause();
    }
  }, [currentTrack]);

  useEffect(() => {
    if (currentTrack.loading || currentTrack.data == null) {
      setRange(0);
    }
  }, [currentTrack.data, currentTrack.loading]);

  const nextSong = () => {
    if (currentTrack && queue?.length) {
      if (Number(currentTrack?.position) >= queue?.length) {
        dispatch({
          type: Actions.SET_CURRENT_TRACK,
          payload: {
            state: "pause",
          },
        });
        return;
      }

      dispatch({
        type: Actions.SET_CURRENT_TRACK,
        payload: {
          data: queue[Number(currentTrack?.position) + 1],
          position: Number(currentTrack?.position) + 1,
        },
      });
    }
  };
  const prevSong = () => {
    if (currentTrack && queue?.length) {
      if (Number(currentTrack?.position) <= 0) {
        return;
      }

      dispatch({
        type: Actions.SET_CURRENT_TRACK,
        payload: {
          data: queue[Number(currentTrack?.position) - 1],
          position: Number(currentTrack?.position) - 1,
        },
      });
    }
  };

  return (
    <>
      {currentTrack?.data || currentTrack?.loading ? (
        <div
          className="fixed  bottom-0 right-0 left-0 w-full z-30  h-[7%] md:h-[6%] bg-[#212121] items-center flex justify-center "
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER });
          }}
        >
          <audio
            ref={player}
            src={currentTrack?.data?.preview}
            onEnded={() => {
              nextSong();
            }}
            onTimeUpdate={() => {
              const duration = player.current?.duration ?? 0;
              const current = player.current?.currentTime ?? 0;
              setRange(getPercentage(current, duration));
            }}
          />
          <div id="player:range" className="h-[3%] absolute top-0 w-full ">
            <div
              className="h-full   bg-gradient-to-r from-[#ff0033] to-[#ff278f]  "
              style={{
                width: range + "%",
              }}
            />
          </div>
          <div className="flex flex-row-reverse md:flex-row  justify-between items-center w-full px-2">
            <div className="flex items-center gap-5">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  prevSong();
                }}
              >
                <PrevIcon
                  className={
                    "md:size-[35px] cursor-pointer opacity-95 hidden md:block"
                  }
                  fill={iconProp.fill}
                />
              </div>
              {currentTrack?.loading && (
                <div className="h-8 w-8  bg-gradient-to-r from-transparent to-[white] rounded-[50%] flex animate-spin  ease-out">
                  <div className="h-7 w-7  bg-[#212121] rounded-[50%] m-auto "></div>
                </div>
              )}
              {!currentTrack?.loading && (
                <>
                  {currentTrack?.state == "pause" && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch({
                          type: Actions.SET_CURRENT_TRACK,
                          payload: { state: "play" },
                        });
                      }}
                    >
                      <PlayIcon {...iconProp} />
                    </div>
                  )}
                  {currentTrack?.state == "play" && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch({
                          type: Actions.SET_CURRENT_TRACK,
                          payload: { state: "pause" },
                        });
                      }}
                    >
                      <PauseIcon {...iconProp} />
                    </div>
                  )}
                </>
              )}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  nextSong();
                }}
              >
                <NextIcon {...iconProp} />
              </div>
            </div>
            {currentTrack.data ? (
              <div className="flex items-center gap-4">
                <figure
                  className=" relative h-[45px] md:h-[40px] w-[45px]  md:w-[40px]"
                  onClick={() =>
                    dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER })
                  }
                >
                  <Image
                    src={
                      currentTrack?.data?.album?.cover_small ??
                      "/placeholder.jpeg"
                    }
                    fill
                    alt="image"
                    sizes="()"
                    className="rounded-sm h-full z-0"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpeg"
                  />
                </figure>
                <div className="flex flex-col">
                  <p className="uppercase font-semibold text-sm md:text-base">
                    {currentTrack?.data?.title}
                  </p>
                  <p className=" md:hidden opacity-75 text-sm">
                    {currentTrack?.data?.artist?.name}
                  </p>
                  <p className=" opacity-75  hidden md:block">
                    {currentTrack?.data?.artist?.name} •{" "}
                    {currentTrack?.data?.album?.title} •{" "}
                    {currentTrack?.data?.album?.record_type}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="md:flex items-center gap-5 hidden">
              <VolumeIcon {...iconProp2} />
              <RandomIcon {...iconProp2} />
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: Actions.TOGGLE_QUEUE_DRAWER });
                }}
              >
                <ChevronIcon
                  className={cn(
                    "cursor-pointer transition-all duration-[0.4s]",
                    {
                      "rotate-180": !openQueue,
                    }
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
