import { Player } from "@/components/Player";
import { Queue } from "@/components/Queue";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Player />
      <Queue />
    </React.Fragment>
  );
}
