import { produce } from "immer";
import { ActionType, IAppStoreState } from "./type";
import { Actions } from "./action";
import { Charts, Playlist } from "@/lib/types";

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
      default:
        break;
    }
  });
};
