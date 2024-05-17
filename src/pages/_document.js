// Table of content for this file is written at the bottom

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        {/* 
        //       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc. - the id will be references by React's Portals
        */}
        <div id="modal"></div>
        <div id="backdrop"></div>
        <div id="tooltip"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//~~ _.  An "index.html" clone for next.js
//
//       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc. - the id will be references by React's Portals
//
