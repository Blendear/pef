export type RGBColorString = string | `rgb(${string})`;

export type ImageWithWrapperProps = {
  src: string;
  alt?: string;
  wrapperCss?: {};
};

export type AppDataOfCurrentUser = {};

export type AppDataUniversalForAllUsersType = {
  languageChosen: "pl" | "eng" | "de";
  // mealIndexMArkedAsFavouriteForDinner: number;
};
