import React, { useState, useRef, useEffect } from 'react';
import { Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './index.less';
const defaultTableScrollWidth = 880; // 1200-280-20*2
const defaultTableHeaderHeight = 55; // 55 as the table herder height. But it will be not 55 sometimes

export default function PageTable({ loading, columns, dataSource }) {
  const [y, setY] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    !loading && dataSource.length > 0 && updateY();
  }, [loading, dataSource.length]);

  useEffect(() => {
    let targetNode;
    if (ref && ref.current) {
      targetNode = ref.current;
      resizeObserver.observe(targetNode);
    }
    return () => {
      resizeObserver.unobserve(targetNode);
      resizeObserver.disconnect();
    };
  }, [ref]);

  function updateY() {
    if (ref && ref.current) {
      let current = ref.current;
      const header = current.querySelector('.ant-table-header');
      let offsetHeight = header
        ? header.clientHeight
        : defaultTableHeaderHeight;
      setY(ref.current.clientHeight - offsetHeight);
    }
  }
  const resizeObserver = new ResizeObserver(() => {
    updateY();
  });

  return (
    <div
      className="global-component-table"
      ref={ref}
      style={
        dataSource && dataSource.length > 0
          ? { borderBottom: '1px solid #f0f0f0' }
          : null
      }
    >
      <Table
        pagination={false}
        loading={{
          indicator: <LoadingOutlined style={{ fontSize: 32 }} spin />,
          spinning: loading,
        }}
        columns={columns}
        dataSource={dataSource}
        rowKey="userId"
        scroll={{ x: defaultTableScrollWidth, y }}
      />
    </div>
  );
}
