import { Actions } from "./action";

export interface IAppStoreContext {
  state: IAppStoreState;
  updateState: (state: IAppStoreState) => void;
}

export interface IAppStoreState {
  loading: boolean;
  openQueue: boolean;
}

export interface ActionType {
  type: Actions;
  payload?: unknown;
}
