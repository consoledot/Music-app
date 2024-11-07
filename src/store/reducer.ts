import { produce } from "immer";
import { ActionType, IAppStoreState } from "./type";
import { Actions } from "./action";

export const reducer = (state: IAppStoreState, action: ActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case Actions.TOGGLE_QUEUE_DRAWER:
        draft.loading = !state.loading;
        break;
      default:
        break;
    }
  });
};
