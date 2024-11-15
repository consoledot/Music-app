import { PlaylistQueue } from "@/component/Playlist";
import { Actions } from "@/store/action";
import { useAppStore } from "@/store/hook";
import { useQuery } from "@/store/query";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Playlist() {
  const {
    state: { playlist, queue, currentTrack },
    dispatch,
  } = useAppStore();
  const { getPlaylist } = useQuery();

  const router = useRouter();

  useEffect(() => {
    getPlaylist(Number(router.query.id as string));
  }, [router.query.id]);

  return (
    <PlaylistQueue
      image={playlist?.picture_xl || ""}
      title={playlist?.title || ""}
      number={playlist?.nb_tracks || 0}
      duration={playlist?.duration || 0}
      id={playlist?.id}
      addToQueue={() => {
        if (queue && currentTrack?.data?.playlist_id == playlist?.id) {
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
          payload: playlist?.tracks?.data.map((v) => ({
            ...v,
            playlist_id: playlist?.id,
          })),
        });
        dispatch({
          type: Actions.SET_CURRENT_TRACK,
          payload: {
            data: { ...playlist?.tracks?.data[0], playlist_id: playlist?.id },
            loading: false,
            state: "play",
          },
        });
      }}
      tracks={
        playlist?.tracks?.data?.map((t, i) => ({
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
                payload: playlist?.tracks?.data.map((v) => ({
                  ...v,
                  playlist_id: playlist?.id,
                })),
              });
            }
            dispatch({
              type: Actions.SET_CURRENT_TRACK,
              payload: {
                data: { ...t, playlist_id: playlist?.id },
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
