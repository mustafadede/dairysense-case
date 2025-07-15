import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./config";

const initI18next = async (lng: string, ns?: string | string[]) => {
  await i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(`../public/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18next;
};

export default initI18next;
