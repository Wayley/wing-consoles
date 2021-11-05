import { useState } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import useAuth from 'wing-use-auth';
import cookie from '../../../utils/cookie';
import { $Message } from '../../../utils/method';

import { cookieConfig, defaultLocale, CodeType } from '../../../config';
import { useLocale } from '../../../hooks/useLocale';
const { tokenKeyName, accountKeyName, accountIdKeyName } = cookieConfig;
const baseURL = `${process.env.REACT_APP_CONSOLE_SERVICE_API_HOST}${process.env.REACT_APP_CONSOLE_SERVICE_API_PATH}`;
const verificationPath = `${baseURL}/verification`;
const loginPath = `${baseURL}/login`;
export default function LoginForm({ ...rest }) {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { updateLang } = useLocale();
  const [logining, setLogining] = useState(false);
  const [verification, setVerification] = useState(verificationPath);
  const [form] = Form.useForm();
  const updateVerification = () => {
    form.setFieldsValue({ verifyCode: '' });
    setLogining(false);
    setVerification(`${verificationPath}?t=${new Date().getTime()}`);
  };
  const onFinish = (values) => {
    fetchLogin(values);
  };

  async function fetchLogin(values) {
    try {
      setLogining(true);
      let form = new FormData();
      for (const key in values) {
        if (Object.hasOwnProperty.call(values, key)) {
          form.append(key, values[key]);
        }
      }
      const response = await fetch(loginPath, {
        method: 'POST',
        credentials: 'include',
        body: form,
      });
      const { data, code, message } = await response.json();
      if (CodeType.isSuccess(code)) {
        auth.signin(() => {
          const { access_token, username, userId } = data;
          cookie.set(tokenKeyName, access_token);
          cookie.set(accountKeyName, username);
          cookie.set(accountIdKeyName, userId);
          updateLang(defaultLocale);
          $Message.success('Login Succeed');
          let { from } = location.state || { from: { pathname: '/' } };
          history.replace(from);
        });
      } else {
        $Message.error(message || 'Failed');
        setLogining(false);
        updateVerification();
      }
    } catch (error) {
      $Message.error(error || 'Failed');
      setLogining(false);
      updateVerification();
    }
  }
  return (
    <Form layout="vertical" onFinish={onFinish} form={form} {...rest}>
      <Form.Item label="Account">
        <Form.Item name="username" rules={[{ required: true }]} noStyle>
          <Input />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Password">
        <Form.Item name="password" rules={[{ required: true }]} noStyle>
          <Input.Password />
        </Form.Item>
      </Form.Item>
      <Form.Item label="VerifyCode">
        <div className="login-form-item-verify-code">
          <Form.Item name="verifyCode" rules={[{ required: true }]} noStyle>
            <Input />
          </Form.Item>
          <img
            src={verification}
            alt="verifyCode"
            onClick={updateVerification}
          />
        </div>
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
