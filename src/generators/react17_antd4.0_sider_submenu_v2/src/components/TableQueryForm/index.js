import { Button, Form, Row, Col } from 'antd';
import intl from 'react-intl-universal';
import './index.less';
let formItemLayout = {
  labelAlign: 'right',
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  colon: false,
};
const gutter = [16, 0];
export default function TableQueryForm({ queryList, onFinish, ...rest }) {
  return queryList && queryList.length > 0 ? (
    <Form
      className="global-component-table-query-form"
      layout="horizontal"
      {...formItemLayout}
      {...rest}
      onFinish={(values) => {
        onFinish && onFinish(values);
      }}
    >
      <Row gutter={gutter}>
        {queryList.map(({ name, label, component, ...rest }) => (
          <Col flex={1} key={name} className="global-component-table-query-col">
            <Form.Item name={name} label={label} {...rest}>
              {component}
            </Form.Item>
          </Col>
        ))}

        <Col className="global-component-table-query-col-submit">
          <Form.Item>
            <Button type="primary" size="small" htmlType="submit">
              {/* 搜索 */}
              {intl.get('search')}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  ) : null;
}
