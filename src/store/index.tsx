import { FC, PropsWithChildren } from "react";
import { AppStoreContext } from "./ctx";
import { IAppStoreContext, IAppStoreState } from "./type";

const AppStore: FC<PropsWithChildren> = (props) => {
  const initialValues: IAppStoreState = {
    loading: false,
    openQueue: false,
  };

  const values: IAppStoreContext = {
    state: initialValues,
  };

  return (
    <AppStoreContext.Provider value={values}>
      {props.children}
    </AppStoreContext.Provider>
  );
};

export default AppStore;
