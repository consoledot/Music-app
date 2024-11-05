import PlayIcon from "@/icons/playIcon";

export const TrackList = () => {
  return (
    <div className="flex justify-between w-full items-center group hover:cursor-pointer">
      <div className="flex gap-4 items-center">
        <div className="w-5 flex place-items-center transition-all ">
          <p className="text-lg font-semibold opacity-60 block group-hover:hidden m-auto w-full">
            1
          </p>
          <PlayIcon
            className="hidden group-hover:block m-auto w-full"
            fill="white"
          />
        </div>
        <div className="flex flex-col">
          <p className="uppercase ">Signs</p>
          <p className=" opacity-60">1.5k plays</p>
        </div>
      </div>
      <div>
        <p className=" opacity-60">4.47</p>
      </div>
    </div>
  );
};
