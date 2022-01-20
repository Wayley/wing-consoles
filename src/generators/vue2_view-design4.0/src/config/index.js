export const APP_PREFIX = 'xxx';
export const TOKEN_KEY = `${APP_PREFIX}_token`;
export const LOCALE_KEY = `${APP_PREFIX}_locale`;
export const USER_NAME_KEY = `${APP_PREFIX}_user_name`;
export const USER_ID_KEY = `${APP_PREFIX}_user_id`;

/* *************************** CODETYPE CONFIG *************************** */
export const CodeType = {
  SUCCESS: 200,
  isSuccess: (code) => code === CodeType.SUCCESS,

  UNAUTHORIZED: 401,
  isUnAuthorized: (code) => code === CodeType.UNAUTHORIZED,

  FORBIDDEN: 403,
  isForbiddened: (code) => code === CodeType.FORBIDDEN,

  TIMEOUT: 408,
  isTimeout: (code) => code === CodeType.TIMEOUT,
};
