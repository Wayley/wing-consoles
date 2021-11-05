import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';
import { Button, Input, Modal, Pagination } from 'antd';

import PageTitle from '../components/PageTitle';
import PageTable from '../components/PageTable';
import TableQueryForm from '../components/TableQueryForm';
import { pageSize } from '../config';
import { pageTotalDisplay } from '../utils/method';
import { useLocale } from '../hooks/useLocale';

import MainService from '../service/MainService';

export default function AccountList() {
  const history = useHistory();
  const { lang } = useLocale();
  const queryList = [
    {
      name: 'id', // key
      label: intl.get('XX_ID'), // XX_ID,
      component: <Input allowClear />,
    },
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
      fixed: 'left',
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
        const { id } = record;
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => history.push(`/xxx/${id}`)}
            >
              {intl.get('action_view') /* 查看 */}
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => history.push(`/xxx/edit/${id}`)}
            >
              {intl.get('action_edit') /* 编辑 */}
            </Button>
            <Button type="link" size="small" onClick={() => deleteHandler(id)}>
              {intl.get('action_delete') /* 删除 */}
            </Button>
          </>
        );
      },
    },
  ];
  const [queryParams, setQueryParams] = useState({
    id: '',
    // TODO:
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

  useEffect(() => {
    getList(queryParams);
  }, [lang, queryParams]);

  /* ********************** Handlers ********************** */
  const deleteHandler = (id) => {
    Modal.confirm({
      title: intl.get('xx_tips'), // 确定删除这条XXX吗？
      onOk: () => {
        deleteItem({ id });
      },
    });
  };
  /* ********************** Request ********************** */
  async function getList(query) {
    setLoading(true);
    const data = await MainService.selectSysUser(query);
    if (data) {
      const { current, pageSize, total, records } = data;
      setDataSource({ current, pageSize, total, records });
    }
    setLoading(false);
  }
  async function deleteItem(params) {
    const data = await MainService.sysRoleDelete(params);
    if (data) {
      getList(queryParams);
    }
  }
  return (
    <div className="main-layout-page-wrapper">
      <PageTitle title={intl.get('XXX_list') /* xxx列表 */}>
        <div style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={() => history.push('/xxx/add')}>
            {intl.get('xxx_add') /* 新增xxx */}
          </Button>
        </div>
      </PageTitle>
      <TableQueryForm
        initialValues={queryParams}
        onFinish={onFinish}
        queryList={queryList}
        // Other props if need
        // style={{ marginBottom: 20 }}
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
        {...dataSource} // pageSize total current
      />
      {/* Other wrappers if need */}
      {/* <div>Other Wrappers</div> */}
    </div>
  );
}
