import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/* //       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page */}
      <Layout>
        <Head>
          {/* //       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO */}
          <title>LTC Investments</title>
          {/* for example : <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>  */}
          <meta name="description" content="LTC Investments" />
        </Head>
        {/* //       _._. Base Next.js component, visible to users */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
