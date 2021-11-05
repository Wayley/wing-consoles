import enUS from 'antd/lib/locale/en_US';
import SYSTEM_ACCOUNT_EN_US from '../views/System/Acount/locales/en_US';
import SYSTEM_ROLE_EN_US from '../views/System/Role/locales/en_US';
import SYSTEM_AUTHORITY_EN_US from '../views/System/Authority/locales/en_US';

const COMMON_EN_US = {
  test: 'Test',

  // Language Selection
  zh_cn: 'Simplified Chinese',
  zh_tw: 'Traditional Chinese',
  en_us: 'English',

  // User
  login: 'Log in',
  logout: 'Sign out',

  // Common
  total: 'Total',
  items: 'Items',
  all: 'All',

  mobile_phone_number: 'Mobile Phone Number',
  email: 'Email',

  search: 'Search',
  action: 'Action',
  action_edit: 'Edit',
  action_view: 'View',
  action_delete: 'Delete',
  action_add: 'Add',

  created_time: 'Created Time',
  updated_time: 'Updated Time',

  confirm: 'Confirm',
  reset: 'Reset',
  save: 'Save',
  submit: 'Submit',
};
const en_US = {
  locale: 'en_US',
  ...enUS,
  ...COMMON_EN_US,
  ...SYSTEM_ACCOUNT_EN_US,
  ...SYSTEM_ROLE_EN_US,
  ...SYSTEM_AUTHORITY_EN_US,
};

export default en_US;
