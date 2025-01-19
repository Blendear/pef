/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const layoutCss = {
  // Code for making sure, that Safari And Firefox will will the whole height too
  // They don't support 100dvh
  container: css({
    height: "100dvh",
    display: "grid",
    // This is for example when navbar should have 100 pixels, yet the <main> should take all the
    // rest of the screen, while the footer shouldn't exist at all
    gridTemplateRows: `100px 1fr 0`,
    // gridTemplateRows: "repeat(3, max-content)",

    // Safari
    "@supports (-webkit-touch-callout: none)": {
      height: "-webkit-fill-available",
    },

    // Firefox
    "@supports (-moz-appearance: none)": {
      height: "-moz-available",
      minHeight: "568px",
    },
  }),
};

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
