import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title> M-Store</title>
      </Head>
      <div className="nav">
        {" "}
        <Nav />
      </div>

      <div className="main-container">{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
