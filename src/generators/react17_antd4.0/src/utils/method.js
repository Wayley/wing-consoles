import { message } from 'antd';
import { DASHBOARD_VIEW_COMMON_PARAMS, defaultLocale } from '../config';
import { localeConfig } from '../locales';

// 为了避免API返回的message字段与antd的message组件命名冲突
export const $Message = message;

/* ********************* Table Viz Create ********************* */
const { host_url, ...commonOptions } = DASHBOARD_VIEW_COMMON_PARAMS;
const { SUPPORTED_LOCALES } = localeConfig;
export function vizCreate(name, containerId, _options) {
  const container = document.getElementById(containerId);
  const { lang, filters, ...otherOptions } = _options || {
    lang: defaultLocale,
  };
  // Match Tableau View's Language(eg:zh-CN en-US zh-TW) with Client locale(eg:zh_CN en_US zh_TW)
  let { universalValue } = SUPPORTED_LOCALES.find((o) => o.value === lang);
  // url example: "http://121.40.193.18/views/2/DataAnalysisResult?:language=en-US"
  const url = `${host_url}views/${name}?:language=${universalValue}`;

  const options = { ...commonOptions, ...filters, ...otherOptions };
  return new window.tableau.Viz(container, url, options);
}

const method = { $Message, vizCreate };
export default method;
