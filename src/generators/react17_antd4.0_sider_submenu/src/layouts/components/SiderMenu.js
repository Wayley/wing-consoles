import { Menu } from 'antd';

export default function HeaderMenu({ onClick, selectedKey, list }) {
  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      onClick={(e) => {
        onClick && onClick(e.key);
      }}
    >
      {list.map((menu) => (
        <Menu.Item key={menu.path}>{menu.title}</Menu.Item>
      ))}
    </Menu>
  );
}
