import { Player } from "@/components/Player";
import { Queue } from "@/components/Queue";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import AppStoreProvider from "@/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppStoreProvider>
        <Component {...pageProps} />
        <Player />
        <Queue />
      </AppStoreProvider>
    </React.Fragment>
  );
}
