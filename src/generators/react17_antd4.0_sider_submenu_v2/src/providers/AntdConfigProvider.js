import { useEffect } from 'react';
import { ConfigProvider } from 'antd';

// Calendar等组件依赖moment的locale
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

import { useLocale } from '../hooks/useLocale';

export default function AntdConfigProvider({ children }) {
  const { locale, lang } = useLocale();
  useEffect(() => {
    moment.locale(lang);
  }, [lang]);
  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
}
