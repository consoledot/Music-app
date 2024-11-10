import MenuIcon from "@/icons/menuIcon";
import PlayIcon from "@/icons/playIcon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  image: string;
  type: "Single" | "Playlist" | "Album";
  id: number;
  title: string;
  onClick?: VoidFunction;
  artist: {
    name: string;
    id: number;
  };
  playAction: VoidFunction;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div
      className="flex flex-col rounded-sm cursor-pointer gap-1 w-[150px] md:w-[250px] "
      onClick={(e) => {
        e.stopPropagation();
        props.onClick?.();
      }}
    >
      <figure className="relative h-[150px] md:h-[220px] w-[150px] md:w-[220px] group">
        <div className="h-[50%] w-full rounded-t-md transition-all ease-in duration-500  group-hover:bg-gradient-to-b from-[#0a0a0a] top-0 bottom-0 right-0 left-0 z-10 absolute " />
        {/* <div className="h-full w-full rounded-t-md transition-all duration-100  bg-black bg-opacity-0 group-hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 z-10 absolute " /> */}
        <div className="absolute   hidden group-hover:block top-2 right-2  transition-opacity ease-in duration-200 z-20 rounded-full p-3 bg-gray-200 bg-opacity-0 hover:bg-opacity-20 ">
          <MenuIcon />
        </div>
        {props.type == "Single" ? (
          <div
            className="h-full w-full absolute z-10  place-items-center hidden group-hover:flex"
            onClick={(e) => {
              e.stopPropagation();
              props.playAction();
            }}
          >
            <PlayIcon className="m-auto size-14" fill="white" />
          </div>
        ) : null}
        <Image
          src={props.image}
          fill
          alt="image"
          sizes="()"
          className="rounded-md h-full z-0"
          placeholder="blur"
          blurDataURL="/placeholder.jpeg"
        />
        {props.type != "Single" ? (
          <div
            className="absolute bottom-2 right-3 hidden  ease-in-out group-hover:block transition-all duration-300 p-2 bg-black rounded-full bg-opacity-50 hover:bg-opacity-100 hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              props.playAction();
            }}
          >
            <PlayIcon />
          </div>
        ) : null}
      </figure>
      <div className="flex flex-col ">
        <p className="text-sm md:text-base font-semibold">{props.title}</p>
        <p
          className="items-center gap-1.5 opacity-70 max-w-full text-sm md:text-base whitespace-normal "
         
        >
          <Link href="/" className="hover:underline">
            {props.type}{" "}
          </Link>
          •
          <Link href="/" className="hover:underline break-words ">
            {" "}
            {props.artist.name}
          </Link>
        </p>
      </div>
    </div>
  );
};
