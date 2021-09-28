import { Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import useAuth from 'wing-use-auth';
import cookie from '../../utils/cookie';
import { cookieConfig } from '../../config';

const { tokenKeyName } = cookieConfig;

export default function Login() {
  const auth = useAuth(); // authenticated, signin, signout
  const history = useHistory();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    auth.signin(() => {
      // TODO:
      cookie.set(tokenKeyName, 'zed2qdasdfks2');
      history.push('/');
    });
  };

  return (
    <Form style={{ width: 400 }} onFinish={onFinish}>
      <Form.Item name="username" label="Account" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Link to="/forget">Forgot password?</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
