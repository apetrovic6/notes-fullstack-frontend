import { Children } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
