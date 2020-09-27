import Head from "next/head";
import { Provider } from "react-redux";
import IndexLayout from "../layouts";
import store from "../redux/store";

import "../styles/style.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>DEMO Streaming</title>
      </Head>
      <IndexLayout>
        <Component {...pageProps} />
      </IndexLayout>
    </Provider>
  );
};

export default MyApp;
