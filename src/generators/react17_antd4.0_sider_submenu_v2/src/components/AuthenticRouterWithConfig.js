import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import useAuth from 'wing-use-auth';

import MainLayout from '../layouts/MainLayout';

import Login from '../views/Login/Login';
import ForgetPassword from '../views/ForgetPassword/ForgetPassword';
import NoMatched, { NotFound } from '../views/NoMatched/NoMatched';
import NoAccess from '../views/NoAccess/NoAccess';

import Welcome from '../views/Welcome/Welcome';

import AcountList from '../views/System/Acount/AcountList';
import AccountAdd from '../views/System/Acount/AccountAdd';
import AccountEdit from '../views/System/Acount/AccountEdit';
import AccountDetail from '../views/System/Acount/AccountDetail';

import RoleList from '../views/System/Role/RoleList';
import RoleAdd from '../views/System/Role/RoleAdd';
import RoleEdit from '../views/System/Role/RoleEdit';
import RoleDetail from '../views/System/Role/RoleDetail';

import AuthorityList from '../views/System/Authority/AuthorityList';
import AuthorityAdd from '../views/System/Authority/AuthorityAdd';
import AuthorityEdit from '../views/System/Authority/AuthorityEdit';
import AuthorityDetail from '../views/System/Authority/AuthorityDetail';

import Dashboard from '../views/Dashboard/Overview/Overview';
import ActiveUserData from '../views/Dashboard/ActiveUserData/ActiveUserData';
import UserDailyIncreaseData from '../views/Dashboard/UserDailyIncreaseData/UserDailyIncreaseData';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const { REACT_APP_PUBLIC_PATH } = process.env;

const routes = [
  {
    path: '/login',
    privateRoute: false,
    exact: true,
    Page: Login,
  },
  {
    path: '/forget',
    privateRoute: false,
    exact: true,
    Page: ForgetPassword,
  },
  {
    path: '/404',
    privateRoute: false,
    Page: NoMatched,
  },
  {
    path: '/',
    privateRoute: true,
    Page: MainLayout,
    childrenList: [
      {
        path: '/dashboard',
        privateRoute: false,
        Page: Empty,
        childrenList: [
          {
            path: '/dashboard',
            privateRoute: false,
            exact: true,
            Page: Welcome,
          },
          {
            path: '/dashboard/overview',
            privateRoute: false,
            Page: Dashboard,
          },
          {
            path: '/dashboard/user-daily-increase-data',
            privateRoute: false,
            Page: UserDailyIncreaseData,
          },
          {
            path: '/dashboard/active-user-data',
            privateRoute: false,
            Page: ActiveUserData,
          },
        ],
      },
      {
        path: '/system',
        privateRoute: false,
        Page: () => <>system</>,
      },
      {
        path: '/',
        privateRoute: false,
        exact: true,
        Page: Welcome,
      },
      {
        path: '/*',
        privateRoute: false,
        Page: NotFound,
      },
    ],
  },
];
function Empty({ children }) {
  return <>{children}</>;
}
const SubRoute = ({ list }) =>
  list ? (
    <Switch>
      {list.map((item, i) => (
        <AppRoute {...item} key={i} />
      ))}
    </Switch>
  ) : (
    <></>
  );
function AppRoute({ path, privateRoute, exact, Page, childrenList, children }) {
  let PageRoute = privateRoute ? PrivateRoute : Route;
  return (
    <PageRoute path={path} exact={exact}>
      <Page>
        <SubRoute list={childrenList} />
      </Page>
    </PageRoute>
  );
}
export default function AuthenticRouterWithConfig() {
  return (
    <Router basename={REACT_APP_PUBLIC_PATH}>
      <Switch>
        {routes.map((item, i) => (
          <AppRoute {...item} key={i} />
        ))}
      </Switch>
    </Router>
  );
}
