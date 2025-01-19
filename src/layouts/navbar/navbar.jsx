/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { footerCss } from "@/layouts/footer/footer";
import { useTranslation } from "@/hooks/useTranslation";

const navbarCss = {
  container: css({
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "max-content",
    gap: "5rem",
    background: `linear-gradient(rgba(${colors.secondaryLight}, 1), rgba(${colors.secondaryLight}, 0.75)), url("/images/other/placeholder-city.jpg")`,
    color: `rgb(${colors.primaryLight})`,
  }),

  header: css({
    justifySelf: "end",
    // maxWidth: "40rem",
    textAlign: "end",
    fontSize: variables.fontSize.header,
    fontWeight: "normal",
    wordWrap: "break-word",
  }),
};
const Navbar = () => {
  const { t } = useTranslation("navbar");

  return (
    <nav css={navbarCss.container}>
      <ImageWithWrapper
        wrapperCss={footerCss.logo}
        src={"/images/brand/PEF-logo-with-bg-and-title.png"}
      />
      <h1 css={navbarCss.header}>{t.header}</h1>
    </nav>
  );
};

export default Navbar;
