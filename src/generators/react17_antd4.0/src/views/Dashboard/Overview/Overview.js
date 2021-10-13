import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, DatePicker, Select } from 'antd';
import { SUPPORTED_DASHBOARD_CARS } from '../../../config';
import { useLocale } from '../../../hooks/useLocale';
import intl from 'react-intl-universal';
import moment from 'moment';

const { Option } = Select;
const queryItemWidth = 200;
export default function Dashboard() {
  const history = useHistory();
  const { lang } = useLocale();
  const containers = [
    {
      key: 'view-total',
      content: 'Dashboard-Total Data',
    },
    {
      key: 'view-user-daily-increase-data',
      content: 'Dashboard-User Daily Increase Data',
      path: '/dashboard/user-daily-increase-data',
    },
    {
      key: 'view-active-user-data',
      content: 'Dashboard-Active User Data',
      path: '/dashboard/active-user-data',
    },
  ];

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
    <div className="dashboard-overview">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-query">
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
      <div className="dashboard-main">
        {containers.map((item) => (
          <div className="dashboard-item dashboard-item-flex" key={item.key}>
            <div className="viz-operations">
              {item.path && (
                <Button onClick={() => history.push(item.path)}>More...</Button>
              )}
            </div>

            <div className="viz-container">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
