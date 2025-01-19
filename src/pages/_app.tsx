/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { colors } from "@/styles/emotion-css/colors";
import { variables } from "@/styles/emotion-css/variables";
import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";

const globalCss = {
  container: css({
    "*, *::before, *::after": {
      margin: "0",
      padding: "0",
      boxSizing: "inherit",

      "@media (prefers-reduced-motion: reduce)": {
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
        transitionDuration: "0.01ms !important",
        scrollBehavior: "auto", // "!important" doesn't work here
      },
    },

    "html:focus-within": {
      scrollBehavior: "smooth",
    },

    body: {
      margin: "0",
      background: `rgb(${colors.whiteLight})`,
      // fontFamily is available thanks to the "font importer" code inside "_document.tsx"
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "normal",
      fontSize: variables.fontSize.regular,
      color: `rgb(${colors.quaternaryLight})`,
    },

    html: {
      lineHeight: "1.15",
      WebkitTextSizeAdjust: "100%",
      boxSizing: "border-box",
      fontSize: "62.5%", // 10px/16px = 62.5% -> 1rem = 10px
    },

    main: {
      display: "grid",
      justifyItems: "center",
    },

    "h1, h2, h3, h4, h5, h6, p": {
      alignSelf: "center",
    },

    h1: {
      fontSize: variables.fontSize.heading,
    },

    h2: {
      fontSize: variables.fontSize.subheading,
    },

    li: {
      listStyle: "none",
    },

    textarea: {
      resize: "none",
      border: "none",
      background: "none",
      outline: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },

    "a, button": {
      all: "unset",
      // For WebKit-based browsers (Safari, Chrome, newer Edge, Opera)
      WebkitTapHighlightColor: "transparent",
      // For Firefox, Internet Explorer, and other browsers
      outline: "none",
      userSelect: "none", // Prevents text selection which might cause visual feedback
      MsTouchAction: "manipulation", // Prevent default touch actions in IE
      touchAction: "manipulation", // Prevent default touch actions in modern browsers

      cursor: "pointer",
    },

    input: {
      all: "unset",
    },
  }),
};

function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/* //       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page */}
      <Layout>
        <Head>
          {/* //       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO */}
          <title>PE Financing</title>
          {/* for example : <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>  */}
          <meta
            name="description"
            content="PE Financing | We invests in companies in the real estate, healthcare, healthy food, and rehabilitation sectors."
          />
        </Head>
        {/* //       _._. Base Next.js component, visible to users */}
        <Global styles={globalCss.container} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
