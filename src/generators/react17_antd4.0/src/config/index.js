import { name } from '../../package.json';

/* ***************************************** APP DEFAULT CONFIG ***************************************** */
export const appName = name;

/* ***************************************** COOKIE CONFIG ***************************************** */
export const cookieConfig = {
  tokenKeyName: `${appName}-token`,
  accountKeyName: `${appName}-account`,
  localeKeyName: `${appName}-locale`,
};

export const configs = { cookieConfig };
export default configs;
