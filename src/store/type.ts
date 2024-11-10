import { Charts, Playlist, Track } from "@/lib/types";
import { Actions } from "./action";
import { Dispatch } from "react";

export interface IAppStoreContext {
  state: IAppStoreState;
  dispatch: Dispatch<ActionType>;
}

export interface IAppStoreState {
  loading: boolean;
  openQueue: boolean;
  chart: Charts | null;
  playlist: Playlist | null;
  queue: Track[] | null;
  currentTrack: CurrentTrack;
}

export interface ActionType {
  type: Actions;
  payload?: unknown;
}

export interface CurrentTrack {
  data: Track | null;
  loading: boolean;
  state: "play" | "pause" | null;
}
