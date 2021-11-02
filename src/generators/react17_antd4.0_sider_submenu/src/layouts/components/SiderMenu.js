import { useState, useEffect } from 'react';

import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
function renderMenu({ title, path, children }) {
  return children && children.length > 0 ? (
    <SubMenu key={path} icon={<SettingOutlined />} title={title}>
      {children.map((child) => renderMenu(child))}
    </SubMenu>
  ) : (
    <Menu.Item key={path}>{title}</Menu.Item>
  );
}
export default function HeaderMenu({ onClick, selectedKey, list, keys }) {
  const rootSubmenuKeys = list.map((o) => o.path);

  const [openKeys, setOpenKeys] = useState([]);
  useEffect(() => {
    let defaultOpendedKeys =
      keys && keys.length >= 3 ? keys.slice(1, keys.length - 1) : [];
    setOpenKeys(defaultOpendedKeys);
  }, [keys]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onClick={(e) => {
        onClick && onClick(e.key);
      }}
      onOpenChange={onOpenChange}
    >
      {list.map((menu) => renderMenu(menu))}
    </Menu>
  );
}
