import { AuthProvider } from 'wing-use-auth';
import { cookieConfig } from '../config';

const { tokenKeyName } = cookieConfig;
export function AppProvider({ children }) {
  return (
    <AuthProvider options={{ cookieKey: tokenKeyName }}>
      {children}
    </AuthProvider>
  );
}
export default AppProvider;
