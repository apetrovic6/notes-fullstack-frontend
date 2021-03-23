import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

const Layout = ({ children }) => {
  const [value, setValue] = useState({});

  return (
    <div className="mx-10">
      <UserContext.Provider value={{ value, setValue }}>
        <Header />
        <main> {children}</main>
      </UserContext.Provider>
    </div>
  );
};

export default Layout;
