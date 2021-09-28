import { useState } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import SiderMenu from '../components/SiderMenu';
import menus from '../mock/menus';

export default function MainLayout({ children }) {
  const history = useHistory();
  const [list, setList] = useState([]);

  const go = (path) => {
    history.push(path);
    setList(menus[path]);
  };
  return (
    <div className="main-layout">
      <div className="sider">
        <SiderMenu list={list} />
      </div>
      <div className="container">
        <div className="header">
          <Button onClick={() => go('/xxx')}>XXX管理</Button>
          <Button onClick={() => go('/system')}>系统管理</Button>
        </div>
        <div className="main">{children}</div>
      </div>
    </div>
  );
}
