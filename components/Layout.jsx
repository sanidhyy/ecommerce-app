import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Head tag */}
      <Head>
        <title>E-commerce Store</title>
      </Head>

      {/* Navbar - Header */}
      <header>
        <Navbar />
      </header>

      {/* Body */}
      <main className="main-container">{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
