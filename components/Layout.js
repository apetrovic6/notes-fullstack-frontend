import React, { Fragment } from "react";
import Header from "./Header";
import { Container, Divider } from "semantic-ui-react";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <main> {children}</main>
    </Fragment>
  );
};

export default Layout;
