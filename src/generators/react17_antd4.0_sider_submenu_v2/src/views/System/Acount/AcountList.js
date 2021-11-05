import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';
import { Button, Input, Tag, Pagination } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import PageTitle from '../../../components/PageTitle';
import PageTable from '../../../components/PageTable';
import TableQueryForm from '../../../components/TableQueryForm';
import { pageSize } from '../../../config';
import { pageTotalDisplay } from '../../../utils/method';
import { useLocale } from '../../../hooks/useLocale';

import MainService from '../../../service/MainService';

export default function AccountList() {
  const history = useHistory();
  const { lang } = useLocale();
  const queryList = [
    {
      name: 'username',
      label: intl.get('sys_account_name'), // 用户姓名
      component: <Input allowClear />,
    },
    {
      name: 'mobile',
      label: intl.get('mobile_phone_number'), // 手机号码
      component: <Input allowClear />,
    },
    {
      name: 'email',
      label: intl.get('email'), // 邮箱
      component: <Input allowClear />,
      rules: [{ type: 'email' }],
    },
  ];
  const statusEnum = {
    1: {
      label: intl.get('sys_account_status_normal'), // 正常
      type: 'success',
      icon: <CheckCircleOutlined />,
    },
    2: {
      label: intl.get('sys_account_status_disabled'), // 禁用
      type: 'error',
      icon: <CloseCircleOutlined />,
    },
    3: {
      label: intl.get('sys_account_status_unauthorized'), // 未授权
      type: 'warning',
      icon: <ExclamationCircleOutlined />,
    },
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId',
      width: 100,
      fixed: 'left',
    },
    {
      title: intl.get('sys_account_name'), // 用户姓名
      dataIndex: 'username',
    },
    {
      title: intl.get('sys_account_display_name'), // 展示名称
      dataIndex: 'displayName',
    },
    {
      title: intl.get('mobile_phone_number'), // 手机号码
      dataIndex: 'mobile',
    },
    {
      title: intl.get('email'), // 邮箱
      dataIndex: 'email',
    },
    {
      title: intl.get('sys_account_status'), // 用户状态
      key: 'status',
      render: (text, record, index) => {
        const { status } = record;
        const { icon, type, label } = statusEnum[status];
        return (
          <Tag icon={icon} color={type}>
            {label}
          </Tag>
        );
      },
    },
    {
      title: intl.get('created_time'), // 创建时间
      dataIndex: 'createAt',
    },
    {
      title: intl.get('updated_time'), // 更新时间
      dataIndex: 'updateAt',
    },
    {
      title: intl.get('action'), // 操作
      dataIndex: 'action',
      fixed: 'right',
      width: 130,
      align: 'center',
      render: (text, record, index) => {
        const { userId } = record;
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => history.push(`/system/account/${userId}`)}
            >
              {intl.get('action_edit') /* 编辑 */}
            </Button>
          </>
        );
      },
    },
  ];
  const [queryParams, setQueryParams] = useState({
    username: '',
    mobile: '',
    email: '',
    current: 1,
    pageSize,
  });
  const [dataSource, setDataSource] = useState({
    records: [],
    current: 1,
    total: 0,
    pageSize,
  });
  const [loading, setLoading] = useState(true);
  const pageChange = (page, pageSize) => {
    setQueryParams((preStates) => ({
      ...preStates,
      ...{ current: page, pageSize },
    }));
  };
  const onFinish = (values) => {
    setQueryParams((preStates) => ({
      ...preStates,
      ...values,
      current: 1, // 每次搜索的时候从第一页开始
    }));
  };

  async function getList(query) {
    setLoading(true);
    const data = await MainService.selectSysUser(query);
    if (data) {
      const { current, pageSize, total, records } = data;
      setDataSource({ current, pageSize, total, records });
    }
    setLoading(false);
  }

  useEffect(() => {
    getList(queryParams);
  }, [lang, queryParams]);
  return (
    <div className="main-layout-page-wrapper">
      <PageTitle title={intl.get('sys_account_list') /* 用户列表 */}>
        <div style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            onClick={() => history.push('/system/account/add')}
          >
            {intl.get('sys_account_add') /* 新增用户 */}
          </Button>
        </div>
      </PageTitle>
      <TableQueryForm
        initialValues={queryParams}
        onFinish={onFinish}
        queryList={queryList}
      />
      <div className="main-layout-auto-overflow-container">
        <PageTable
          loading={loading}
          columns={columns}
          dataSource={dataSource.records}
        />
      </div>

      <Pagination
        className="main-layout-pagination"
        onChange={pageChange}
        showTotal={pageTotalDisplay}
        showQuickJumper
        showSizeChanger
        hideOnSinglePage
        {...dataSource}
      />
    </div>
  );
}
