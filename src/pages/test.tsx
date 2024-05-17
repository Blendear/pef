/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { Parent } from "@/features/a_template/components/Parent";

const Test = () => {
  return (
    <div
      css={{
        "& *": {
          fontSize: "4rem",
        },

        "& > div": {
          margin: "2rem 0 0 0",
          border: "1px solid white",
        },
      }}
    >
      <Parent />
    </div>
  );
};

export default Test;
