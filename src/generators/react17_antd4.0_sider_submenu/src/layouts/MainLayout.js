import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import useAuth from 'wing-use-auth';

import HeaderMenu from './components/HeaderMenu';
import LocaleSelector from './components/LocaleSelector';

import Avatar from '../assets/avatar_default.jpg';
import localeConfig from '../locales';
import { useLocale } from '../hooks/useLocale';
import { cookie } from '../utils/cookie';
import { $Message } from '../utils/method';

import { cookieConfig, CodeType } from '../config';
import { logout } from '../service';
const { accountKeyName } = cookieConfig;
const { SUPPORTED_LOCALES } = localeConfig;

export default function MainLayout({ children }) {
  const history = useHistory();
  const { lang, updateLang } = useLocale();
  const auth = useAuth();
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
    // const menus = await getUserMenus();
    // console.log(menus);
  }
  useEffect(() => {
    getMenus();
  }, []);
  return (
    <div className="main-layout">
      {/* <div className="main-layout-sider">sider</div> */}
      <div className="main-layout-main">
        <div className="main-layout-header">
          <div className="main-layout-logo" onClick={() => history.push('/')}>
            <div
              style={{ fontSize: 24, fontWeight: 'bold', fontStyle: 'italic' }}
            >
              BIG LOGO
            </div>
            {/* <img src='' alt="logo" /> */}
          </div>
          <div style={{ flex: 1, marginLeft: 40 }}>
            <HeaderMenu />
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
              Logout
            </Button>
          </div>
        </div>
        <div className="main-layout-wrapper">{children}</div>
      </div>
    </div>
  );
}
