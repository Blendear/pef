import { useRouter } from "next/router";
import { en } from "../../public/locales/en";
import { pl } from "../../public/locales/pl";
import { de } from "../../public/locales/de";

export const useTranslation = (pageName) => {
  const { locale } = useRouter();

  const t =
    {
      pl: pl[pageName],
      en: en[pageName],
      de: de[pageName],
    }[locale] || en;

  return { t };
};
