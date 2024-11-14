import { produce } from "immer";
import {
  ActionType,
  IAppStoreState,
  CurrentTrack,
  TrackWithPlaylistId,
} from "./type";
import { Actions } from "./action";
import { Album, Charts, Playlist } from "@/lib/types";

export const reducer = (state: IAppStoreState, action: ActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case Actions.UPDATE_STORE:
        draft = action.payload as IAppStoreState;
        break;
      case Actions.TOGGLE_QUEUE_DRAWER:
        draft.openQueue = !state.openQueue;
        break;
      case Actions.SET_CHART:
        draft.chart = action.payload as Charts;
        break;
      case Actions.SET_LOADING:
        draft.loading = true;
        break;
      case Actions.UNSET_LOADING:
        draft.loading = false;
        break;
      case Actions.SET_PLAYLIST:
        draft.playlist = action.payload as Playlist;
        break;
      case Actions.SET_ALBUM:
        draft.album = action.payload as Album;
        break;
      case Actions.SET_QUEUE:
        draft.queue = action.payload as TrackWithPlaylistId[];
        break;
      case Actions.SET_CURRENT_TRACK:
        draft.currentTrack = {
          ...state.currentTrack,
          ...(action.payload as CurrentTrack),
        };
        break;
      default:
        break;
    }
  });
};
