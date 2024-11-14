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
  const { getChart, getPlaylist, setQueuePlaylist, getAlbum, setQueueAlbum } =
    useQuery();
  const router = useRouter();

  useEffect(() => {
    getChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  const toPlaylist = async (id: number) => {
    dispatch({ type: Actions.SET_LOADING });
    await getPlaylist(id);
    router.push("/playlist?id=" + id);
    dispatch({ type: Actions.UNSET_LOADING });
  };

  const toAlbum = async (id: number) => {
    dispatch({ type: Actions.SET_LOADING });
    await getAlbum(id);
    router.push("/album?id=" + id);
    dispatch({ type: Actions.UNSET_LOADING });
  };

  return (
    <div>
      <div className="max-w-screen-2xl m-auto p-3 pt-16 flex flex-col gap-14  ">
        <div className="flex flex-col gap-6 ">
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
                playAction={() => {
                  dispatch({
                    type: Actions.SET_CURRENT_TRACK,
                    payload: { data, state: "play" },
                  });
                  dispatch({
                    type: Actions.SET_QUEUE,
                    payload: [data],
                  });
                }}
              />
            ))}
          </HorizontalLayout>
        </div>
        <div className="flex flex-col gap-6 ">
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
                playAction={() => {
                  setQueuePlaylist(data?.id);
                }}
              />
            ))}
          </HorizontalLayout>
        </div>

        <div className="flex flex-col gap-6 ">
          {chart ? (
            <h1 className="text-4xl font-semibold">Trending Albums</h1>
          ) : null}
          <HorizontalLayout>
            {chart?.albums?.data?.map((data, i) => (
              <Card
                key={i}
                image={data?.cover_xl ?? data?.cover}
                artist={{ name: data?.artist?.name, id: data?.artist?.id }}
                type="Album"
                title={data?.title}
                id={data?.id}
                onClick={() => {
                  toAlbum(data?.id);
                }}
                playAction={() => {
                  setQueueAlbum(data?.id);
                }}
              />
            ))}
          </HorizontalLayout>
        </div>
      </div>
    </div>
  );
}
