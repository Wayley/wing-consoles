import { _cookie } from '@/util/cookie';
import { TOKEN_KEY, LOCALE_KEY } from '@/config';
import SUPPORTED_LOCALES from '../locale/SUPPORTED_LOCALES';
export const setToken = (token) => {
  _cookie.set(TOKEN_KEY, token);
};
export const getToken = () => {
  const token = _cookie.get(TOKEN_KEY);
  if (token) return token;
  else return false;
};

export const setLocale = (locale) => {
  _cookie.set(LOCALE_KEY, locale);
};
export const getLocale = () => {
  const locale = _cookie.get(LOCALE_KEY);
  if (locale) return locale;
  else return false;
};

export const getDefaultLocale = () => {
  if (navigator && navigator.language) {
    const navLang = navigator.language;
    const _NAV_LANG = SUPPORTED_LOCALES.find(
      (o) => o.universalValue === navLang
    );
    if (_NAV_LANG) return _NAV_LANG.value;
  }
  return 'zh_CN';
};
