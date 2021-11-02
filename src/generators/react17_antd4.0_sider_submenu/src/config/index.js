import { name } from '../../package.json';

export const appName = name;

export const cookieConfig = {
  tokenKeyName: `${appName}-token`,
  accountKeyName: `${appName}-account`,
  accountIdKeyName: `${appName}-account-id`,
  localeKeyName: `${appName}-locale`,
};
export const defaultLocale = 'en_US'; // or navigator.language

export const APP_ICS_CONFIG = {
  client_secret: 'Fih793987',
  client_id: 'console_911427',
  grant_type: 'password',
  userType: '8540868',
};
/* *************************** CODETYPE CONFIG *************************** */
export const CodeType = {
  SUCCESS: 200,
  isSuccess: (code) => code === CodeType.SUCCESS,
  UNAUTHENTICATED: 401,
  isUnAuthenticated: (code) => code === CodeType.UNAUTHENTICATED,
  TIMEOUT: 408,
  isTimeout: (code) => code === CodeType.TIMEOUT,
};
/* *************************** DASHBOARD CONFIG *************************** */
export const SUPPORTED_DASHBOARD_CARS = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Car 1',
    value: 'car1',
  },
  {
    label: 'Car 2',
    value: 'car2',
  },
  {
    label: 'Car 3',
    value: 'car3',
  },
];
/* *************************** MENU COMPONENT RENDER CONFIG *************************** */
export const MENU_COMPONENT_CONFIG = {
  menuKeyName: 'path',
  menuTitleName: 'title',
  menuChildrenName: 'children',
};

export const configs = { cookieConfig };

export default configs;
