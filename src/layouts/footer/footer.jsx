/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { FaLinkedin } from "react-icons/fa";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useTranslation } from "@/hooks/useTranslation";

const footerCss = {
  container: css({
    padding: "2rem 0",
    display: "grid",
    justifyItems: "center",
    backgroundColor: `rgb(${colors.secondaryLight})`,
    background: `linear-gradient(rgba(${colors.secondaryLight}, 1), rgba(${colors.secondaryLight}, 0.75)), url("/images/other/fasade-3.jpg")`,
    color: `rgb(${colors.primaryLight})`,

    "& > div": {
      padding: "2rem 0 6rem 0",
      display: "grid",
      width: "100%",
      justifyItems: "center",
      columnGap: "20px",

      "@media (min-width:922px)": {
        padding: "0",
        maxWidth: "1100px",
        gridAutoFlow: "column",
      },

      "& > div:not(:first-of-type):not(:last-of-type)": {
        alignSelf: "center",
        width: "23rem",
        display: "grid",
        justifyItems: "center",
        rowGap: "1rem",

        "@media (min-width:922px)": {
          width: "max-content",
          // justifyItems: "start",
          // gridTemplateRows: `repeat(5, ${variables.fontSize.regular})`,
        },

        "& > a": {
          ":hover": {
            color: `rgb(${colors.whiteLight}, 0.75)`,
          },
        },

        // "& > p": {
        //   "& > span": {
        //     color: `rgb(${colors.whiteLight})`,
        //   },
        // },

        "& > p:last-of-type": {
          "& > span:hover": {
            filter: "brightness(0.85)",
          },
        },
      },

      "& > div:not(:first-of-type)": {
        "@media (max-width:922px)": {
          margin: "40px 0 0 0",
        },
      },
    },
  }),

  logo: css({
    width: "175px",
    height: "175px", // Since it's not a square image. -> 175 / 1.202 = 145.5
  }),

  socialsSvgs: css({
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    alignItems: "center",

    "@media (orientation:landscape)": {
      gridAutoFlow: "row",
    },

    "& > a:hover": {
      filter: "brightness(0.85)",
    },
  }),

  socialSvg: css([
    universalCss.wrapperWithCenteredSvg("6rem", "80%"),
    {
      color: `rgb(${colors.whiteLight},0.75)`,
    },
  ]),
};
const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer css={footerCss.container}>
      <div>
        <div>
          <ImageWithWrapper
            wrapperCss={footerCss.logo}
            src={"/images/brand/PEF-logo-title-transparent-fully.png"}
          />
        </div>

        <div>
          <p>PE Financing AG</p>
          <p>Riedpark 3</p>
          <p>6300 Zug</p>
          <p> {t.addressCountry}</p>
        </div>

        <div>
          <p>
            {t.nipLabel}: <span>CHE-112.315.936</span>
          </p>

          {/* <p>
            {`${t.phoneLabel}: `}
            <span>
              <a href={`tel:+48 604 513 082`}>(+48) 604 513 082</a>
            </span>
          </p> */}
          <p>
            {`${t.emailLabel}: `}
            <span>
              <a href={`mailto:office1pef@gmail.com`}>office1pef@gmail.com</a>
            </span>
          </p>
        </div>

        <div css={footerCss.socialsSvgs}>
          <a href="https://www.linkedin.com/in/roland-cibis-68951194/">
            <div css={footerCss.socialSvg}>
              <FaLinkedin />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
