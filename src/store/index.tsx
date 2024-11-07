import { FC, PropsWithChildren, useMemo, useState } from "react";
import { AppStoreContext } from "./ctx";
import { IAppStoreContext, IAppStoreState } from "./type";

const AppStore: FC<PropsWithChildren> = (props) => {
  const initialValues: IAppStoreState = {
    loading: false,
    openQueue: false,
  };
  const [globalState, setGlobalState] = useState<IAppStoreState>(initialValues);

  const updateState = (state: IAppStoreState) => {
    setGlobalState({ ...state });
  };

  const values: IAppStoreContext = useMemo(
    () => ({
      state: { ...globalState },
      updateState,
    }),

    [globalState]
  );

  console.log("index", { values });

  return (
    <AppStoreContext.Provider value={values}>
      {props.children}
    </AppStoreContext.Provider>
  );
};

export default AppStore;
