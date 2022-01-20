import { createWingService } from 'wing-axios';
import { getToken, getLocale } from '@/util';

const baseURL = `${process.env.VUE_APP_CONSOLE_SERVICE_PATH}`; // Use Console Service
const apiUrls = {
  /* *************************** SYSTEM-ACCOUNT *************************** */
  getUserList: 'get,/sysuser/sysUser/selectPage', //用户分页查询

  /* *************************** SYSTEM-AUTHORITY *************************** */

  /* *************************** SYSTEM-ROLE *************************** */
};
const service = createWingService({
  apiUrls,
  baseURL,
  contentType: 'application/json',
  token: () => getToken(),
  commonQuery: () => ({ lang: getLocale() }),
});

export default service;
