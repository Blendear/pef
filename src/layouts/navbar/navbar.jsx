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
    background: `linear-gradient(rgba(${colors.secondaryLight}, 1), rgba(${colors.secondaryLight}, 0.75)), url("/images/other/placeholder-city.jpg")`,
    color: `rgb(${colors.primaryLight})`,
  }),

  logo: css({
    // margin: "0 5rem",
    width: "150px",
    height: "150px",
  }),

  header: css({
    alignSelf: "center",
    // maxWidth: "40rem",
    textAlign: "center",
    fontSize: variables.fontSize.heading,
    fontWeight: "normal",
    wordWrap: "break-word",
  }),
};
const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <nav css={navbarCss.container}>
      <ImageWithWrapper
        wrapperCss={navbarCss.logo}
        src={"/images/brand/PEF-logo-with-bg-and-title.png"}
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
