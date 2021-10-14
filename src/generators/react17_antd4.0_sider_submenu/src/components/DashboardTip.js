import React, { useEffect, useState } from 'react';

import { Modal } from 'antd';
export default function DashboardTip({ children }) {
  const [noticed, setNoticed] = useState(false);
  useEffect(() => {
    Modal.info({
      title: 'Dashboard Tip',
      content: (
        <div>
          <p>
            In order to have a good experience of viewing the dashboard, please
            ensure that the browser network environment is good.
          </p>
        </div>
      ),
      onOk() {
        setNoticed(true);
      },
    });
  }, []);
  return noticed && children;
}
