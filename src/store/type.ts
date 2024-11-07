import { Actions } from "./action";

export interface IAppStoreContext {
  state: IAppStoreState;
}

export interface IAppStoreState {
  loading: boolean;
  openQueue: boolean;
}

export interface ActionType {
  type: Actions;
  payload?: unknown;
}
