import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';
import { Form, Input, Table, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useLocale } from '../../../hooks/useLocale';

import PageTitle from '../../../components/PageTitle';
import AppSubmitButtonGroup from '../../../components/AppSubmitButtonGroup';
import Tabs, { TabPane } from '../../../components/Tabs';

import MainService from '../../../service/MainService';

const layout = { labelCol: { span: 4 }, wrapperCol: { span: 10 } };
const tailLayout = { wrapperCol: { offset: 4, span: 10 } };
function PasswordIcon(visible) {
  return visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
}
function RoleRelation({ value, onChange, data }) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '关联角色',
      dataIndex: 'name',
    },
  ];

  return (
    <Table
      bordered
      rowKey="id"
      style={{ marginTop: 10 }}
      pagination={false}
      columns={columns}
      dataSource={data}
      rowSelection={{ type: 'checkbox', selectedRowKeys: value, onChange }}
    />
  );
}
function AccountAddForm({ onFinish, onReset, roleList }) {
  const [form] = Form.useForm();
  const roleIdsChange = () => {};

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={(values) => onFinish && onFinish(values)}
    >
      <Form.Item name="username" label="用户姓名" rules={[{ required: true }]}>
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="displayName"
        label="展示名称"
        rules={[{ required: true }]}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="mobile"
        label="手机号码"
        rules={[
          { required: true },
          {
            pattern: /^\d+$/,
            message: 'The input is not valid mobile phone number!',
          },
        ]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        name="password"
        label="用户密码"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input.Password iconRender={PasswordIcon} allowClear />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="确认密码"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码不一致'));
            },
          }),
        ]}
        dependencies={['password']}
        hasFeedback
      >
        <Input.Password iconRender={PasswordIcon} allowClear />
      </Form.Item>
      <Form.Item name="roleIds" label="关联角色" rules={[{ required: true }]}>
        <RoleRelation
          onChange={roleIdsChange}
          data={roleList}
          value={[1, 28]}
        />
      </Form.Item>
      <AppSubmitButtonGroup
        tailLayout={tailLayout}
        onReset={() => {
          form.resetFields();
          onReset && onReset(form);
        }}
      />
    </Form>
  );
}
export default function AccountAdd() {
  const history = useHistory();
  const { lang } = useLocale();
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    getRoleList({ pageSize: 9999 });
  }, [lang]);

  /* ********************** Handlers ********************** */
  const onFinish = (values) => {
    console.log(values);
  };

  /* ********************** Request ********************** */
  async function getRoleList(query) {
    const data = await MainService.selectSysRole(query);
    if (data && data.records) setRoleList(data.records);
  }
  return (
    <div className="main-layout-page-wrapper">
      <PageTitle title={intl.get('sys_account_add') /* 新增用户 */} />
      <Tabs>
        <TabPane tab="基本資訊" key="1">
          <AccountAddForm onFinish={onFinish} roleList={roleList} />
        </TabPane>
      </Tabs>
    </div>
  );
}
