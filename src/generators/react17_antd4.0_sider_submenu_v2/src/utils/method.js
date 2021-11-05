import { message } from 'antd';
import intl from 'react-intl-universal';

import cookie from './cookie';
import { cookieConfig } from '../config';

const { tokenKeyName, localeKeyName } = cookieConfig;

// 为了避免API返回的message字段与antd的message组件命名冲突
export const $Message = message;

/* ****************************** Business Functions ****************************** */
export function getToken() {
  return cookie.get(tokenKeyName);
}
export function getLocale() {
  return cookie.get(localeKeyName);
}
// Table Page Component Locale Display
export const pageTotalDisplay = (total) => {
  return `${intl.get('total')} ${total} ${intl.get('items')}`;
};
// Randomly generate a random string with the specified number of digits
export function generateSecret(length) {
  if (length === undefined || length == null) {
    length = 1;
  }
  const len = length > 10 ? 10 : length;
  const str = Math.random().toString(36).substr(2, len);
  if (str.length >= length) {
    return str;
  }
  return str.concat(generateSecret(length - str.length));
}
