import { useLocales } from "expo-localization";
import React from "react";
import { useTranslation } from "react-i18next";
import "@/locales/i18n";

export function LocaleProvider(props: React.PropsWithChildren) {
  const [{ languageTag }] = useLocales();
  const { i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(languageTag);
  }, [languageTag, i18n]);

  return props.children;
}
