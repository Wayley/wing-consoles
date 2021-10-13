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

import DashboardTip from '../components/DashboardTip';

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
export default function AuthenticRouter() {
  return (
    <Router basename={REACT_APP_PUBLIC_PATH}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forget">
          <ForgetPassword />
        </Route>
        <Route path="/404">
          <NoMatched />
        </Route>
        <PrivateRoute path="/">
          <MainLayout>
            <Switch>
              <Route path="/dashboard">
                <DashboardTip>
                  <Switch>
                    <Route path="/dashboard/overview">
                      <Dashboard />
                    </Route>
                    <Route path="/dashboard/user-daily-increase-data">
                      <UserDailyIncreaseData />
                    </Route>
                    <Route path="/dashboard/active-user-data">
                      <ActiveUserData />
                    </Route>
                  </Switch>
                </DashboardTip>
              </Route>
              <Route path="/system">
                <Switch>
                  <Route path="/system/account">
                    <Switch>
                      <Route path="/system/account/list">
                        <AcountList />
                      </Route>
                      <Route exact path="/system/account/add">
                        <AccountAdd />
                      </Route>
                      <Route exact path="/system/account/:id">
                        <AccountEdit />
                      </Route>
                      <Route exact path="/system/account/detail/:id">
                        <AccountDetail />
                      </Route>
                    </Switch>
                  </Route>
                  <Route path="/system/role">
                    <Switch>
                      <Route path="/system/role/list">
                        <RoleList />
                      </Route>
                      <Route exact path="/system/role/add">
                        <RoleAdd />
                      </Route>
                      <Route exact path="/system/role/:id">
                        <RoleEdit />
                      </Route>
                      <Route exact path="/system/role/detail/:id">
                        <RoleDetail />
                      </Route>
                    </Switch>
                  </Route>
                  <Route path="/system/authority">
                    <Switch>
                      <Route path="/system/authority/list">
                        <AuthorityList />
                      </Route>
                      <Route exact path="/system/authority/add">
                        <AuthorityAdd />
                      </Route>
                      <Route exact path="/system/authority/:id">
                        <AuthorityEdit />
                      </Route>
                      <Route exact path="/system/authority/detail/:id">
                        <AuthorityDetail />
                      </Route>
                    </Switch>
                  </Route>
                </Switch>
              </Route>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </MainLayout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
