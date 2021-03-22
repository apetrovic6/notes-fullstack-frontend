import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="mx-10">
      <Header />
      <main> {children}</main>
    </div>
  );
};

export default Layout;
