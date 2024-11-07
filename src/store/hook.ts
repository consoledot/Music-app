import { useContext, useState } from "react";
import { AppStoreContext } from "./ctx";
import { AppStoreOutOfContextError } from "./utils";
import { IAppStoreState } from "./type";

export const useAppStore = () => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new AppStoreOutOfContextError();
  }
  const [state, setState] = useState<IAppStoreState>(context.state);

  const updateLoading = () => setState((v) => ({ ...v, loading: !v?.loading }));

  return {
    state,
    dispatch: { updateLoading },
  };
};

export const useAppUpdate = () => {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw new AppStoreOutOfContextError();
  }
};
