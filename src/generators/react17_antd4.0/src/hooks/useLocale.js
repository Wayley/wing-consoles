import React, { useContext, createContext, useState } from 'react';
import intl from 'react-intl-universal';
import { cookie } from '../utils/cookie';
import { cookieConfig, defaultLocale } from '../config';
import zh_CN from '../locales/zh_CN';
import zh_TW from '../locales/zh_TW';
import en_US from '../locales/en_US';

const { localeKeyName } = cookieConfig;
const localeContext = createContext();

const locales = { zh_CN, zh_TW, en_US };

function useProvideLocale() {
  const defaultLang = cookie.get(localeKeyName);
  const [lang, setLang] = useState(defaultLang || defaultLocale);
  const updateLang = (value) => {
    setLang(value);
    cookie.update(localeKeyName, value);
  };
  return {
    lang,
    locale: locales[lang],
    updateLang,
  };
}

export function LocaleProvider({ children }) {
  const locale = useProvideLocale();
  const loadLocales = ({ lang, locale }) => {
    intl.init({
      currentLocale: lang,
      locales: {
        [lang]: locale,
      },
    });
  };
  loadLocales(locale);
  return (
    <localeContext.Provider value={locale}>{children}</localeContext.Provider>
  );
}

export function useLocale() {
  return useContext(localeContext);
}
