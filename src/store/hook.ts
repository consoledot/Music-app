import { useContext } from "react";
import { AppStoreContext } from "./ctx";
import { AppStoreOutOfContextError } from "./utils";

export const useAppStore = () => {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new AppStoreOutOfContextError();
  }
  return context;
};
