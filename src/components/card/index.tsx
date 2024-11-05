import MenuIcon from "@/icons/menuIcon";
import PlayIcon from "@/icons/playIcon";
import Image from "next/image";
import Link from "next/link";

const img =
  "https://9jaclassic.com.ng/wp-content/uploads/2024/10/Anendlessocean-OCTAGON.jpg";
export const Card = () => {
  return (
    <div className="flex flex-col rounded-sm cursor-pointer gap-1 w-[150px] md:w-[250px]">
      <figure className="relative h-[150px] md:h-[250px] w-[150px] md:w-[250px] group">
        <div className="h-[50%] w-full rounded-t-md transition-all ease-in duration-500  group-hover:bg-gradient-to-b from-zinc-900 top-0 bottom-0 right-0 left-0 z-10 absolute " />
        {/* <div className="h-full w-full rounded-t-md transition-all duration-100  bg-black bg-opacity-0 group-hover:bg-opacity-50 top-0 bottom-0 right-0 left-0 z-10 absolute " /> */}
        <div className="absolute   hidden group-hover:block top-2 right-2  transition-opacity ease-in duration-200 z-20 rounded-full p-3 bg-gray-200 bg-opacity-0 hover:bg-opacity-20 ">
          <MenuIcon />
        </div>
        <div className="h-full w-full absolute z-40 flex place-items-center">
          <PlayIcon className="m-auto size-14" fill="white" />
        </div>
        <Image
          src={img}
          fill
          alt="image"
          sizes="()"
          className="rounded-md h-full z-0"
        />

        <div className="absolute bottom-2 right-3 hidden  ease-in-out group-hover:block transition-all duration-300 p-2 bg-black rounded-full bg-opacity-50 hover:bg-opacity-100 hover:scale-125">
          <PlayIcon />
        </div>
      </figure>
      <div className="flex flex-col ">
        <p className="font-semibold">OCTAGON</p>
        <p
          className="flex items-center gap-1.5 opacity-70 max-w-full text-[14px] md:text-[18px] whitespace-normal overflow-hidden "
          // style={{
          //   fontSize: "clamp(1rem, 0.5vw, 1rem)",
          // }}
        >
          {" "}
          <Link href="/" className="hover:underline">
            Album
          </Link>{" "}
          •
          <Link href="/" className="hover:underline  ">
            Anendlessocean
          </Link>
        </p>
      </div>
    </div>
  );
};
