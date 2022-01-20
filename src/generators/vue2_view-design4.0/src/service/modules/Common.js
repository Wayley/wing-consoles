import { createWingService } from 'wing-axios';
import { getToken, getLocale } from '@/util';

const baseURL = `${process.env.VUE_APP_COMMON_SERVICE_HOST}${process.env.VUE_APP_COMMON_SERVICE_PATH}`; // Use Common Service
const apiUrls = {
  /* *************************** REGION *************************** */
  getAllRegionList: 'GET,/region/getAllRegionList', // 所有区域列表
};
const service = createWingService({
  apiUrls,
  baseURL,
  contentType: 'application/json',
  token: () => getToken(),
  commonQuery: () => ({ lang: getLocale() }),
});

export default service;
