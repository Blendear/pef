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
import ImageWithWrapper from "@/components/ImageWithWrapper";

const icons = {
  first: <MdOutlineRealEstateAgent />,
  second: <MdOutlineMedicalServices />,
  third: <CiWheat />,
  fourth: <MdOutlineGppGood />,
};

const homeCss = {
  container: css({
    padding: `0 0 ${variables.gap.lg} 0 `,
    display: "grid",
    gap: variables.gap.lg,
  }),

  header: css({
    padding: "0 3rem",
    textAlign: "center",
    fontSize: variables.fontSize.subheading,
  }),

  infoChunks: css({
    margin: `0 0 2rem 0`,
    display: "flex",
    gap: "2rem 6rem",
    flexWrap: "wrap",
    justifyContent: "center",

    "& > div": {
      width: "100%",
      flex: "0 0 40rem",
      display: "grid",
      gap: variables.gap.md,
      gridAutoRows: "max-content",

      "@media (max-width: 800px)": {
        flex: "0 0 35rem",
      },
      "@media (max-width: 450px)": {
        flex: "0 0 25rem",
      },

      "& > h3": {
        textAlign: "center",
      },

      "& > p": {
        textAlign: "justify",

        "@media (max-width: 800px)": {
          textAlign: "center",
        },
      },

      "& > svg": {
        justifySelf: "center",
        fontSize: "100px",
        color: `rgb(${colors.tertiaryLight}, 0.85)`,
      },
    },
  }),

  imageUnderInfoChunks: css({
    width: "100%",
    height: "300px",
  }),

  leaderContainer: css({
    margin: "1rem 0 0 0",
    display: "grid",
    justifyContent: "center",
    position: "relative",
  }),

  leaderImage: css({
    margin: "0 0 3rem 0",
    width: "200px",
    height: "200px",
    justifySelf: "center",

    "& > span": {
      borderRadius: "50%",
    },
  }),

  leaderBgShapeOne: css({
    position: "absolute",
    justifySelf: "center",
    transform: "translate(15%, -15%)",
    width: "175px",
    height: "175px",
    borderRadius: "50%",
    backgroundColor: `rgb(${colors.tertiaryLight}, 0.85)`,
    zIndex: -1,
  }),

  leaderBgShapeTwo: css({
    position: "absolute",
    justifySelf: "center",
    transform: "translate(-30%, 15%)",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: `rgb(${colors.tertiaryLight}, 0.25)`,
    zIndex: -1,
  }),

  leaderName: css({
    margin: "0 0 2rem 0",
    textAlign: "center",
    fontSize: variables.fontSize.heading,
  }),

  leaderRole: css({
    padding: "0 3rem",
    margin: "0 0 2rem 0",
    textAlign: "center",
    fontSize: variables.fontSize.subheading,
  }),
};

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div css={homeCss.container}>
      <ImageWithWrapper
        wrapperCss={homeCss.imageUnderInfoChunks}
        src={"/images/other/city.jpg"}
      />

      <h1 css={homeCss.header}>{t.headers.whoAreWe}</h1>

      <div css={homeCss.infoChunks}>
        {["first", "second"].map((dataVisualizer, index) => {
          return (
            <div key={index}>
              {icons[dataVisualizer]}
              <h3>{t.infoChunks[dataVisualizer].header}</h3>
              <p>{t.infoChunks[dataVisualizer].content}</p>
            </div>
          );
        })}
      </div>

      <ImageWithWrapper
        wrapperCss={homeCss.imageUnderInfoChunks}
        src={"/images/other/farm-sunny.jpg"}
      />

      <div css={homeCss.infoChunks}>
        {["third", "fourth"].map((dataVisualizer, index) => {
          return (
            <div key={index}>
              {icons[dataVisualizer]}
              <h3>{t.infoChunks[dataVisualizer].header}</h3>
              <p>{t.infoChunks[dataVisualizer].content}</p>
            </div>
          );
        })}
      </div>

      <h2 css={homeCss.header}>{t.headers.meetOutLeader}</h2>

      <div css={homeCss.leaderContainer}>
        <div css={homeCss.leaderBgShapeOne}></div>
        <div css={homeCss.leaderBgShapeTwo}></div>
        <ImageWithWrapper
          wrapperCss={homeCss.leaderImage}
          src={"/images/other/leader-profile.png"}
        />
        <div>
          <p css={homeCss.leaderName}>Roland Cibis</p>
          <p css={homeCss.leaderRole}>{t.leader.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
