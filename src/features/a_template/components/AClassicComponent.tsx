/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { OneTwoThreeFourWordComponentNameProps } from "@/types";
import { useRouter } from "next/router";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";

// two words fully written, the rest are initials
const oneTwoTFWCNCss = {
  container: css({
    // Take it from "tempalte css" word file
  }),
};

export const OneTwoThreeFourWordComponentName =
  ({}: OneTwoThreeFourWordComponentNameProps) => {
    const { locale } = useRouter();
    const t = locale === "en" ? en.home : pl.home;

    return <div>{t.greeting}</div>;
  };
