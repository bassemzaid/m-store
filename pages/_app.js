import React from "react";
import "../styles/globals.css";

import { Layout } from "../ecommerce/component";
import { StoreContext } from "../ecommerce/context/StoreContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StoreContext>
      {" "}
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StoreContext>
  );
}

export default MyApp;
