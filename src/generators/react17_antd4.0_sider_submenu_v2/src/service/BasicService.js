import { createWingService } from 'wing-axios';
import { getLocale, getToken } from '../utils/method';
import request from './request';
const baseURL = `${process.env.REACT_APP_BASIC_SERVICE_API_HOST}${process.env.REACT_APP_BASIC_SERVICE_API_PATH}`;
const apiUrls = {
  // Channel
  addChannel: 'POST,/channel/addChannel', // 添加渠道
  editChannel: 'POST,/channel/editChannel', // 编辑渠道
  getChannelById: 'GET,/channel/getChannelById', // 获取渠道详情
  selectChannelList: 'POST,/channel/selectChannelList', // 渠道查询列表

  // Channel MOdel
  addChannelModel: 'POST,/channel/channelModel/addChannelModel', // 添加類別
  editChannelModel: 'POST,/channelModel/editChannelModel', // 编辑類別
  getChannelModelById: 'GET,/channelModel/getChannelModelById', // 获取類別详情
  selectChannelModelList: 'POST,/channel/channelModel/selectChannelModelList', // 類別查询列表
  // Region
  getAllRegionList: 'GET,/region/getAllRegionList', // 所有区域列表
  getRegionList: 'GET,/region/getRegionList', // 所有区域列表

  // BasicData 数据字典
  getByBusinessType: 'GET,/basicData/getByBusinessType', // 根据业务类型查询配置数据，返回列表结构
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
