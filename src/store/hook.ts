import { useContext, useEffect, useReducer } from "react";
import { AppStoreContext } from "./ctx";
import { AppStoreOutOfContextError } from "./utils";
import { reducer } from "./reducer";

export const useAppStore = () => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new AppStoreOutOfContextError();
  }

  const [state, dispatch] = useReducer(reducer, context.state);

  useEffect(() => {
    context.updateState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return {
    state: context.state,
    dispatch,
  };
};

export const useAppUpdate = () => {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw new AppStoreOutOfContextError();
  }
};
