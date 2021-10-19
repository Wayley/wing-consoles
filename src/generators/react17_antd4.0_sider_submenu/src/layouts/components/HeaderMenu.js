import { Menu } from 'antd';

export default function HeaderMenu({ onClick, selectedKey, list }) {
  return (
    <Menu
      onClick={(e) => {
        onClick && onClick(e.key);
      }}
      defaultSelectedKeys={[selectedKey]}
      mode="horizontal"
    >
      {list &&
        list.map((menu) => <Menu.Item key={menu.path}>{menu.title}</Menu.Item>)}
    </Menu>
  );
}
