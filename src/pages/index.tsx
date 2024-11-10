import { Card } from "@/components/Card";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import { useQuery } from "@/store/query";
import { HorizontalLayout } from "@/ui/horizontalLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const {
    state: { chart },
    dispatch,
  } = useAppStore();
  const { getChart, getPlaylist } = useQuery();
  const router = useRouter();

  useEffect(() => {
    getChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log([chart]);
  const toPlaylist = async (id: number) => {
    dispatch({ type: Actions.SET_LOADING });
    await getPlaylist(id);
    router.push("/playlist?id=" + id);
    dispatch({ type: Actions.UNSET_LOADING });
  };

  return (
    <div>
      <div className="max-w-screen-2xl m-auto p-3 pt-16 flex flex-col gap-14  ">
        <div className="flex flex-col gap-4 ">
          {chart ? (
            <h1 className="text-4xl font-semibold">New Release</h1>
          ) : null}
          <HorizontalLayout>
            {chart?.tracks?.data?.map((data, i) => (
              <Card
                key={i}
                image={data?.album?.cover_xl}
                artist={{ name: data?.artist?.name, id: data?.artist?.id }}
                type={"Single"}
                id={data?.id}
                title={data?.title}
              />
            ))}
          </HorizontalLayout>
        </div>
        <div className="flex flex-col gap-4 ">
          {chart ? (
            <h1 className="text-4xl font-semibold">Trending Playlist</h1>
          ) : null}
          <HorizontalLayout>
            {chart?.playlists?.data?.map((data, i) => (
              <Card
                key={i}
                image={data?.picture_xl}
                artist={{ name: data?.user?.name, id: data?.user?.id }}
                type={"Playlist"}
                id={data?.id}
                title={data?.title}
                onClick={() => toPlaylist(data?.id)}
              />
            ))}
          </HorizontalLayout>
        </div>
      </div>
    </div>
  );
}
