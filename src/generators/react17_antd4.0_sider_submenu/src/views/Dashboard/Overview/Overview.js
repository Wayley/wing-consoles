import React, { useEffect } from 'react';

import { Form, Button, DatePicker, Select } from 'antd';
import { SUPPORTED_DASHBOARD_CARS } from '../../../config';
import { useLocale } from '../../../hooks/useLocale';
import intl from 'react-intl-universal';
import moment from 'moment';

const { Option } = Select;
const queryItemWidth = 200;
export default function Dashboard() {
  const { lang } = useLocale();

  useEffect(() => {
    // do any thing when lang changed
  }, [lang]);

  const onFinish = ({ date, ...rest }) => {
    let values = {
      date: date ? date.format('YYYY-MM-DD') : '',
      ...rest,
    };
    console.log(values);
  };

  return (
    <div>
      <div className="page-title">Dashboard Overview</div>
      <div className="page-query">
        <Form
          layout="inline"
          colon={false}
          onFinish={onFinish}
          initialValues={{ 'Car Id No': '' }}
        >
          <Form.Item label="Date" name="date">
            <DatePicker
              disabledDate={(current) =>
                current && current > moment().endOf('day')
              }
              style={{ width: queryItemWidth }}
            />
          </Form.Item>

          <Form.Item label="Car ID" name="Car Id No">
            <Select style={{ width: queryItemWidth }}>
              {SUPPORTED_DASHBOARD_CARS.map((item) => (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>Dashboard Overview Page</div>
    </div>
  );
}
