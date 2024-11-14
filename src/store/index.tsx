import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from "react";
import { AppStoreContext } from "./ctx";
import { IAppStoreState } from "./type";
import { reducer } from "./reducer";
import { Actions } from "./action";

const AppStore: FC<PropsWithChildren> = (props) => {
  const initialValues: IAppStoreState = {
    loading: false,
    openQueue: false,
    chart: null,
    playlist: null,
    queue: null,
    album: null,
    currentTrack: {
      loading: false,
      data: null,
      state: null,
      position: 0,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const storedState = sessionStorage.getItem("app:state");
      if (!storedState) return;
      console.log({ storedState: JSON.parse(storedState) });
      dispatch({
        type: Actions.UPDATE_STORE,
        payload: JSON.parse(storedState),
      });
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("app:state", JSON.stringify(state));
  }, [state]);

  const values = useMemo(
    () => ({
      state,
      dispatch,
    }),

    [state]
  );

  return (
    <AppStoreContext.Provider value={values}>
      {props.children}
    </AppStoreContext.Provider>
  );
};

export default AppStore;
