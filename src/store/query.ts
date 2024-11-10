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

  const setQueuePlaylist = async (id: number) => {
    dispatch({
      type: Actions.SET_CURRENT_TRACK,
      payload: { loading: true, data: null },
    });
    const playlist = await apiClient.playlist.get(id.toString());

    dispatch({ type: Actions.SET_QUEUE, payload: playlist });
    dispatch({
      type: Actions.SET_CURRENT_TRACK,
      payload: { data: playlist.tracks.data[0], loading: false },
    });
  };

  return { getChart, getPlaylist, setQueuePlaylist };
};
