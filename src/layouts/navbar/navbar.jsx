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
    padding: "2rem 4rem",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "150px 3fr 150px",
    gap: "5rem",
    backgroundColor: `rgb(${colors.secondaryLight})`,
    background: `linear-gradient(rgba(${colors.secondaryLight}, 1), rgba(${colors.secondaryLight}, 0.75)), url("/images/other/fasade-1.jpg")`,
    color: `rgb(${colors.primaryLight})`,

    "@media (max-width: 750px)": {
      padding: "2rem 3rem",
      gridTemplateColumns: "125px 3fr 125px",
      gap: "2rem",
    },

    "@media (max-width: 600px)": {
      padding: "2rem 1.75rem",
      gridTemplateColumns: "75px 3fr 75px",
    },
  }),

  logo: css({
    width: "100%",
    aspectRatio: "1/1",
  }),

  header: css({
    alignSelf: "center",
    textAlign: "center",
    fontSize: variables.fontSize.subheading,
    fontWeight: "normal",
    wordWrap: "break-word",

    "@media (max-width: 600px)": {
      fontSize: variables.fontSize.regular,
    },

    "@media (max-width: 420px)": {
      gridRow: "2",
      gridColumn: "1 / -1",
    },

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
        src={"/images/brand/PEF-logo-title-transparent-fully.png"}
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
