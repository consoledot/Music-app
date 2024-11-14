import { apiClient } from "@/lib/DeezerApi";
import { useAppStore } from "./hook";
import { Actions } from "./action";

export const useQuery = () => {
  const { dispatch } = useAppStore();
  const getChart = async () => {
    const chart = await apiClient.chart.get();
    dispatch({ type: Actions.SET_CHART, payload: chart });
  };

  const getPlaylist = async (id: number) => {
    const playlist = await apiClient.playlist.get(id.toString());
    dispatch({ type: Actions.SET_PLAYLIST, payload: playlist });
  };

  const getAlbum = async (id: number) => {
    const album = await apiClient.album.get(id.toString());
    dispatch({ type: Actions.SET_ALBUM, payload: album });
  };

  const setQueuePlaylist = async (id: number) => {
    dispatch({
      type: Actions.SET_CURRENT_TRACK,
      payload: { loading: true, data: null },
    });
    const playlist = await apiClient.playlist.get(id.toString());

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
        data: playlist?.tracks?.data[0],
        loading: false,
        state: "play",
      },
    });
  };

  const setQueueAlbum = async (id: number) => {
    dispatch({
      type: Actions.SET_CURRENT_TRACK,
      payload: { loading: true, data: null },
    });
    const album = await apiClient.album.get(id.toString());
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
        data: album?.tracks?.data[0],
        loading: false,
        state: "play",
      },
    });
  };

  return { getChart, getPlaylist, setQueuePlaylist, getAlbum, setQueueAlbum };
};
