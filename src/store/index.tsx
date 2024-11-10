import { FC, PropsWithChildren, useEffect, useMemo, useReducer, } from "react";
import { AppStoreContext } from "./ctx";
import {  IAppStoreState } from "./type";
import { reducer } from "./reducer";
import { Actions } from "./action";

const AppStore: FC<PropsWithChildren> = (props) => {
  const initialValues: IAppStoreState = {
    loading: false,
    openQueue: false,
    chart: null,
    playlist: null,
    queue: null,
  };
  // const [globalState, setGlobalState] = useState<IAppStoreState>(() => {
  //   return initialValues;
  // });
  const [state, dispatch] = useReducer(reducer, initialValues)

  useEffect(() => {
    console.log("again");
    if (typeof window !== "undefined" && window.localStorage) {
      const storedState = sessionStorage.getItem("app:state");
      if (!storedState) return;
      dispatch({type: Actions.UPDATE_STORE, payload: JSON.parse(storedState)})
   
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
