import LoginForm from './components/LoginForm';
import { FetchProvider } from 'wing-use-fetch';

const basename = '/ids';
export default function Login() {
  return (
    <div className="login-page">
      <FetchProvider
        basename={basename}
        options={{
          cacheLife: 0,
          cachePolicy: 'no-cache',
        }}
      >
        <LoginForm style={{ width: 310 }} />
      </FetchProvider>
    </div>
  );
}
