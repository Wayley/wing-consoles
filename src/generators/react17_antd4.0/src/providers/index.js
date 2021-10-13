import { AuthProvider } from 'wing-use-auth';
import { cookieConfig } from '../config';
import AntdConfigProvider from './AntdConfigProvider';
import { LocaleProvider } from '../hooks/useLocale';
const { tokenKeyName } = cookieConfig;
export function AppProvider({ children }) {
  return (
    <LocaleProvider>
      <AntdConfigProvider>
        <AuthProvider options={{ cookieKey: tokenKeyName }}>
          {children}
        </AuthProvider>
      </AntdConfigProvider>
    </LocaleProvider>
  );
}
export default AppProvider;
