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

  return { getChart, getPlaylist };
};
