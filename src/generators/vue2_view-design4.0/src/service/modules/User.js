import { createWingService } from 'wing-axios';
import { getToken, getLocale } from '@/util';

const baseURL = `${process.env.VUE_APP_CONSOLE_SERVICE_PATH}`; // Use Console Service
const apiUrls = {
  /* *************************** USER *************************** */
  logout: 'POST,/logout',
  getCurrentUserInfo: 'GET,/sysuser/sysUser/getCurrentUserInfo', //当前登录用户信息
  getCurrUserMenuList: 'GET,/sysuser/sysUser/selectUserMenu', //获取当前用户菜单
};
const service = createWingService({
  apiUrls,
  baseURL,
  contentType: 'application/json',
  token: () => getToken(),
  commonQuery: () => ({ lang: getLocale() }),
});

export default service;
