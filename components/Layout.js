import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import Header from "./Header";

const Layout = ({ children }) => {
  const [value, setValue] = useState({});
  const router = useRouter();

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
