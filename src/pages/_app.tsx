import { Player } from "@/component/Player";
import { Queue } from "@/component/Queue";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { Suspense } from "react";
import AppStoreProvider from "@/store";
import { Loading } from "@/ui/loading";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppStoreProvider>
        <Loading />
        <Suspense fallback={<p className="text-white">Loadinf</p>}>
          <div className="pb-[7%] md:pb-[5%]">
            <Component {...pageProps} />
          </div>
        </Suspense>

        <Player />
        <Queue />
      </AppStoreProvider>
    </React.Fragment>
  );
}
