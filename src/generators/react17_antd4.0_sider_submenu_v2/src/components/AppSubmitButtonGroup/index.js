import { Form, Button } from 'antd';
import intl from 'react-intl-universal';
import './index.less';
export default function AppSubmitButtonGroup({ tailLayout, onReset }) {
  return (
    <Form.Item
      {...tailLayout}
      className="global-component-submit-button-wrapper"
    >
      <Button
        htmlType="button"
        className="global-component-submit-reset-button"
        onClick={() => onReset && onReset()}
      >
        Reset
      </Button>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  );
}
