import zhCN from 'antd/lib/locale/zh_CN';
import SYSTEM_ACCOUNT_ZH_CN from '../views/System/Acount/locales/zh_CN';
import SYSTEM_ROLE_ZH_CN from '../views/System/Role/locales/zh_CN';
import SYSTEM_AUTHORITY_ZH_CN from '../views/System/Authority/locales/zh_CN';

const COMMON_ZH_CN = {
  test: '测试',

  // Language Selection
  zh_cn: '中文简体',
  zh_tw: '中文繁体',
  en_us: '英语',

  // User
  login: '登录',
  logout: '退出账号',

  // Common
  total: '共',
  items: '条',
  all: '全部',

  mobile_phone_number: '手机号码',
  email: '邮箱',

  search: '搜索',
  action: '操作',
  action_edit: '编辑',
  action_view: '查看',
  action_delete: '删除',
  action_add: '新增',

  created_time: '创建时间',
  updated_time: '更新时间',

  confirm: '确定',
  reset: '重置',
  save: '保存',
  submit: '提交',
};
const zh_CN = {
  locale: 'zh_CN',
  ...zhCN,
  ...COMMON_ZH_CN,
  ...SYSTEM_ACCOUNT_ZH_CN,
  ...SYSTEM_ROLE_ZH_CN,
  ...SYSTEM_AUTHORITY_ZH_CN,
};

export default zh_CN;
