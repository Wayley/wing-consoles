import zhTW from 'antd/lib/locale/zh_TW';
import SYSTEM_ACCOUNT_ZH_TW from '../views/System/Acount/locales/zh_TW';
import SYSTEM_ROLE_ZH_TW from '../views/System/Role/locales/zh_TW';
import AUTHORITY_ROLE_ZH_TW from '../views/System/Authority/locales/zh_TW';

const COMMON_ZH_TW = {
  test: '測試',

  // Language Selection
  zh_cn: '中文簡體',
  zh_tw: '中文繁體',
  en_us: '英語',

  // User
  login: '登錄',
  logout: '退出賬號',

  // Common
  total: '共',
  items: '條',
  all: '全部',

  mobile_phone_number: '手機號碼',
  email: '郵箱',

  search: '搜索',
  action: '操作',
  action_edit: '編輯',
  action_view: '查看',
  action_delete: '刪除',
  action_add: '新增',

  created_time: '創建時間',
  updated_time: '更新時間',

  confirm: '確定',
  reset: '重置',
  save: '保存',
  submit: '提交',
};
const zh_TW = {
  locale: 'zh_TW',
  ...zhTW,
  ...COMMON_ZH_TW,
  ...SYSTEM_ACCOUNT_ZH_TW,
  ...SYSTEM_ROLE_ZH_TW,
  ...AUTHORITY_ROLE_ZH_TW,
};

export default zh_TW;
