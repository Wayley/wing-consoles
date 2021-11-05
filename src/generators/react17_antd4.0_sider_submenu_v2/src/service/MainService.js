import { createWingService } from 'wing-axios';
import { getLocale, getToken } from '../utils/method';
import request from './request';
const baseURL = `${process.env.REACT_APP_CONSOLE_SERVICE_API_HOST}${process.env.REACT_APP_CONSOLE_SERVICE_API_PATH}`;
const apiUrls = {
  /* **************************** System Account **************************** */
  selectSysUser: 'GET,/sysuser/sysUser/selectPage',
  getAreaCodeList: 'GET,/sysuser/sysUser/getAreaCodeList',

  /* **************************** System Role **************************** */
  selectSysRole: 'GET,/sysuser/sysRole/selectPage',
  sysRoleDelete: 'DELETE,/sysuser/sysRole/delete',

  /* **************************** System Authority **************************** */
  selectSysAuthority: 'GET,/sysuser/sysPermission/selectPage',
  sysAuthorityDelete: 'DELETE,/sysuser/sysPermission/delete',
};
const WING_SERVICE_INSTANCE = createWingService({
  apiUrls,
  baseURL,
  contentType: 'application/json',
  token: () => getToken(),
  commonParams: { lang: getLocale() },
});
let SERVICE = {};
for (const key in apiUrls) {
  if (Object.hasOwnProperty.call(apiUrls, key)) {
    SERVICE[key] = async (params) => {
      return await request(WING_SERVICE_INSTANCE, key, params);
    };
  }
}

export default SERVICE;
