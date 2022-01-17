import { _cookie } from '@/util/cookie';
import { TOKEN_KEY, LOCALE_KEY, USER_ID_KEY, USER_NAME_KEY } from '@/config';
import SUPPORTED_LOCALES from '../locale/SUPPORTED_LOCALES';

export const setToken = (token) => {
  _cookie.set(TOKEN_KEY, token);
};
export const getToken = () => {
  return _cookie.get(TOKEN_KEY) || '';
};

export const setLocale = (locale) => {
  _cookie.set(LOCALE_KEY, locale);
};
export const getLocale = () => {
  return _cookie.get(LOCALE_KEY) || '';
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

export const setUserId = (userId) => {
  _cookie.set(USER_ID_KEY, userId);
};
export const getUserId = () => {
  return _cookie.get(USER_ID_KEY) || '';
};

export const setUserName = (userName) => {
  _cookie.set(USER_NAME_KEY, userName);
};
export const getUserName = () => {
  return _cookie.get(USER_NAME_KEY) || '';
};
