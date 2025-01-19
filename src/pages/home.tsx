/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css/variables";
import { universalCss } from "@/styles/emotion-css/universal";
import { colors } from "@/styles/emotion-css/colors";
import { useTranslation } from "@/hooks/useTranslation";
import { BsHouse } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { CiWheat } from "react-icons/ci";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";

const icons = {
  first: <MdOutlineRealEstateAgent />,
  second: <MdOutlineMedicalServices />,
  third: <CiWheat />,
  fourth: <MdOutlineGppGood />,
};

const homeCss = {
  container: css({
    padding: `${variables.gap.lg} ${variables.gap.lg} `,
    display: "grid",
    gap: variables.gap.lg,
  }),

  whoAreWe: css({
    textAlign: "center",
  }),

  infoChunks: css({
    display: "flex",
    gap: "2rem 6rem",
    flexWrap: "wrap",
    justifyContent: "center",

    "& > div": {
      width: "100%",
      flex: "0 0 25rem",
      display: "grid",
      gap: variables.gap.md,
      gridAutoRows: "max-content",

      "& > *": {
        textAlign: "center",
      },

      "& > svg": {
        justifySelf: "center",
        fontSize: "100px",
        color: `rgb(${colors.tertiaryLight}, 0.85)`,
      },
    },
  }),
};

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div css={homeCss.container}>
      <h1 css={homeCss.whoAreWe}>{t.headers.whoAreWe}</h1>

      <div css={homeCss.infoChunks}>
        {["first", "second", "third", "fourth"].map((dataVisualizer, index) => {
          return (
            <div key={index}>
              {icons[dataVisualizer]}
              <h3>{t.infoChunks[dataVisualizer].header}</h3>
              <p>{t.infoChunks[dataVisualizer].content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
