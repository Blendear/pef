export type RGBColorString = string | `rgb(${string})`;

export type ImageWithWrapperProps = {
  width?: string;
  height?: string;
  aspectRatio?: string;
  src: string;
  alt?: string;
  wrapperCss?: {};
};

export type AppDataOfCurrentUser = {};

export type AppDataUniversalForAllUsersType = {
  // languageChosen: "pl" | "eng";
  // mealIndexMArkedAsFavouriteForDinner: number;
};
