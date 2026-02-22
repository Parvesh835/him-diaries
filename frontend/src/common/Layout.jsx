import React from "react";
import Header from "../componet/Header";
import Footer from "../componet/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default Layout;
