import { createContext } from "react";
import { IAppStoreContext } from "./type";

export const AppStoreContext = createContext<IAppStoreContext | null>(null);
