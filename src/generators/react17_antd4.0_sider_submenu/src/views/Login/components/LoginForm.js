import { useState } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import useAuth from 'wing-use-auth';
import useFetch from 'wing-use-fetch';
import cookie from '../../../utils/cookie';
import { $Message } from '../../../utils/method';

import {
  cookieConfig,
  defaultLocale,
  APP_ICS_CONFIG,
  CodeType,
} from '../../../config';
import { useLocale } from '../../../hooks/useLocale';
import { login } from '../../../service';
const { tokenKeyName, accountKeyName, accountIdKeyName } = cookieConfig;

export default function LoginForm({ ...rest }) {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { updateLang } = useLocale();
  // const { formPost } = useFetch();
  const [logining, setLogining] = useState(false);

  const onFinish = (values) => {
    setLogining(true);
    fetchLogin(values);
  };

  async function fetchLogin(values) {
    try {
      const { data, code, message } = await login({
        ...values,
        ...APP_ICS_CONFIG,
      });
      if (CodeType.isSuccess(code)) {
        auth.signin(() => {
          const { access_token, user_id } = data;
          const { username } = values;
          cookie.set(tokenKeyName, access_token);
          cookie.set(accountKeyName, username);
          cookie.set(accountIdKeyName, user_id);
          updateLang(defaultLocale);
          $Message.success('Login Succeed');
          let { from } = location.state || { from: { pathname: '/' } };
          history.replace(from);
        });
      } else {
        $Message.error(message || 'Failed');
        setLogining(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form name="normal_login" layout="vertical" onFinish={onFinish} {...rest}>
      <Form.Item name="username" label="Account" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item style={{ textAlign: 'right' }}>
        <Link to="/forget">Forgot password？</Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          {logining ? 'Logging' : 'Log in'}
        </Button>
      </Form.Item>
    </Form>
  );
}
