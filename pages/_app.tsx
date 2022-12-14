import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (

    <React.StrictMode>
      <Head>
        <title>Whiteboard Collabrative App</title>


      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
export default App;
