import { PlaylistQueue } from "@/components/Playlist";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import { useQuery } from "@/store/query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Album() {
  const {
    state: { album, queue, currentTrack },
    dispatch,
  } = useAppStore();
  const { getAlbum } = useQuery();

  const router = useRouter();

  useEffect(() => {
    getAlbum(Number(router.query.id as string));
  }, [router.query.id]);

  return (
    <PlaylistQueue
      image={album?.cover_xl ?? ""}
      title={album?.title ?? ""}
      number={album?.tracks?.data?.length ?? 0}
      id={album?.id}
      duration={album?.tracks?.data.reduce((a, b) => a + b.duration, 0) ?? 0}
      addToQueue={() => {
        if (queue && currentTrack?.data?.playlist_id == album?.id) {
          dispatch({
            type: Actions.SET_CURRENT_TRACK,
            payload: {
              state: currentTrack?.state == "play" ? "pause" : "play",
            },
          });
          return;
        }
        dispatch({
          type: Actions.SET_QUEUE,
          payload: album?.tracks?.data.map((v) => ({
            ...v,
            playlist_id: album?.id,
          })),
        });
        dispatch({
          type: Actions.SET_CURRENT_TRACK,
          payload: {
            data: { ...album?.tracks?.data[0], playlist_id: album?.id },
            loading: false,
            state: "play",
          },
        });
      }}
      tracks={
        album?.tracks?.data.map((t, i) => ({
          position: i + 1,
          title: t?.title,
          duration: t?.duration,
          id: t?.id,
          preview: t?.preview,
          artist_name: t?.artist?.name,
          onClick: () => {
            if (currentTrack?.data?.id === t?.id) {
              dispatch({
                type: Actions.SET_CURRENT_TRACK,
                payload: {
                  state: currentTrack?.state == "play" ? "pause" : "play",
                },
              });
              return;
            }
            if (!queue) {
              dispatch({
                type: Actions.SET_QUEUE,
                payload: album?.tracks?.data.map((v) => ({
                  ...v,
                  playlist_id: album?.id,
                })),
              });
            }
            dispatch({
              type: Actions.SET_CURRENT_TRACK,
              payload: {
                data: { ...t, playlist_id: album?.id },
                loading: false,
                state: "play",
                position: i,
              },
            });
          },
        })) ?? []
      }
    />
  );
}
