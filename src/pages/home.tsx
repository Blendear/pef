/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";
import { de } from "../../public/locales/de";
import { useTranslation } from "@/hooks/useTranslation";

const OneTwoTFWCNCss = {
  container: css({
    // Take it from "tempalte css" word file
  }),
};

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <h1 css={universalCss.container}>{t.exampleText}</h1>
    </div>
  );
};

export default Home;
