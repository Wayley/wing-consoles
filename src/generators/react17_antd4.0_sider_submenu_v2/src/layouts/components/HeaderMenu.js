import { Menu } from 'antd';
import { MENU_COMPONENT_CONFIG } from '../../config';
const { menuKeyName, menuTitleName } = MENU_COMPONENT_CONFIG;
export default function HeaderMenu({ onClick, selectedKey, list }) {
  return (
    <Menu
      onClick={(e) => {
        onClick && onClick(e.key);
      }}
      selectedKeys={[selectedKey]}
      mode="horizontal"
    >
      {list &&
        list.map((menu) => (
          <Menu.Item key={menu[menuKeyName]}>{menu[menuTitleName]}</Menu.Item>
        ))}
    </Menu>
  );
}
