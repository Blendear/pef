// Table of content for this file is written at the bottom

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        {/* font importer */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

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
