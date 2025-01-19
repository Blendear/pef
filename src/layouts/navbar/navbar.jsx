/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageFlagChooser } from "@/features/translation/components/LanguageFlagChooser";
import { ReactTyped } from "react-typed";

const navbarCss = {
  container: css({
    padding: "2rem 7rem",
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    gap: "5rem",
    backgroundColor: `rgb(${colors.secondaryLight})`,
    background: `linear-gradient(rgba(${colors.secondaryLight}, 1), rgba(${colors.secondaryLight}, 0.75)), url("/images/other/fasade-1.jpg")`,
    color: `rgb(${colors.primaryLight})`,
  }),

  logo: css({
    width: "175px",
    height: "145px", // Since it's not a square image. -> 175 / 1.202 = 145.5
  }),

  header: css({
    alignSelf: "center",
    textAlign: "center",
    fontSize: variables.fontSize.heading,
    fontWeight: "normal",
    wordWrap: "break-word",

    "& .typed-cursor": {
      color: `rgb(${colors.tertiaryLight})`,
    },
  }),
};
const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <nav css={navbarCss.container}>
      <ImageWithWrapper
        wrapperCss={navbarCss.logo}
        src={"/images/brand/PEF-logo-title-transparent.png"}
      />
      {/* <h1 css={navbarCss.header}>{t.slogan}</h1> */}
      <ReactTyped
        css={navbarCss.header}
        strings={t.slogans}
        typeSpeed={30}
        backDelay={3000}
        backSpeed={30}
        loop
      />
      <LanguageFlagChooser />
    </nav>
  );
};

export default Navbar;
