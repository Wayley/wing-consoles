import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';

import { Button } from 'antd';
import useAuth from 'wing-use-auth';

import HeaderMenu from './components/HeaderMenu';
import SiderMenu from './components/SiderMenu';
import LocaleSelector from './components/LocaleSelector';

import Avatar from '../assets/avatar_default.jpg';
import localeConfig from '../locales';
import { useLocale } from '../hooks/useLocale';
import { cookie } from '../utils/cookie';
import { $Message } from '../utils/method';

import { cookieConfig, CodeType } from '../config';
import { logout, getUserMenus } from '../service';
const { accountKeyName } = cookieConfig;
const { SUPPORTED_LOCALES } = localeConfig;

function findChildren(list, activeKey) {
  let active = list.find((o) => o.path === activeKey);

  return active && active.children ? active.children : [];
}

export default function MainLayout({ children }) {
  const history = useHistory();
  const { lang, updateLang } = useLocale();
  const auth = useAuth();
  const [menus, setMenus] = useState([]);
  const [key, setKey] = useState(''); // Header Menu Selected Key
  const headerMenuClick = (key) => {
    history.push(key);
    setKey(key);
  };

  // LOG OUT
  async function fetchLogout() {
    try {
      const { code, message } = await logout();
      if (CodeType.isSuccess(code)) {
        auth.signout(() => {
          cookie.removeAll();
          $Message.success('Logout Succeed');
          auth.signout(() => history.push('/'));
        });
      } else {
        $Message.error(message || 'Failed');
      }
    } catch (error) {}
  }
  async function getMenus() {
    const menus = await getUserMenus();
    setMenus(menus || []);
  }
  useEffect(() => {
    getMenus();
  }, []);
  return (
    <div className="main-layout">
      <div className="main-layout-sider">
        <div className="main-layout-logo" onClick={() => history.push('/')}>
          <div
            style={{ fontSize: 24, fontWeight: 'bold', fontStyle: 'italic' }}
          >
            BIG LOGO
          </div>
          {/* <img src='' alt="logo" /> */}
        </div>
        {key && menus && menus.length > 0 && (
          <SiderMenu list={findChildren(menus, key)} selectedKey="7" />
        )}
      </div>
      <div className="main-layout-main">
        <div className="main-layout-header">
          <div style={{ flex: 1, marginLeft: 40 }}>
            <HeaderMenu list={menus} onClick={headerMenuClick} selectedKey="" />
          </div>
          <div className="main-layout-operation">
            <LocaleSelector
              locales={SUPPORTED_LOCALES}
              locale={lang}
              onChange={updateLang}
              className="locale-selector"
            />
            <span style={{ marginLeft: 15, fontSize: 18 }}>
              {cookie.get(accountKeyName)}
            </span>
            <img
              src={Avatar}
              alt="avatar"
              className="main-layout-operation-avatar"
              style={{ marginLeft: 15 }}
            />
            <Button
              type="text"
              onClick={fetchLogout}
              className="main-layout-operation-logout"
            >
              {intl.get('logout')}
            </Button>
          </div>
        </div>
        <div className="main-layout-wrapper">{children}</div>
      </div>
    </div>
  );
}
