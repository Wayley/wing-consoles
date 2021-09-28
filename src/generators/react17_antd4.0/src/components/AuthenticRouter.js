import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import useAuth from 'wing-use-auth';

import Login from '../views/Login/Login';
import ForgetPassword from '../views/ForgetPassword/ForgetPassword';

import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';

import Welcome from '../views/Welcome/Welcome';

import AcountList from '../views/System/Acount/AcountList';
import RoleList from '../views/System/Role/RoleList';

import Proxy from '../views/Xxx/Proxy';

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

// const routes = [
//   {
//     path: '/login',
//     component: Login,
//   },
//   {
//     path: '/forget',
//     component: ForgetPassword,
//   },
//   {
//     path: '/',
//     component: MainLayout,
//     children: [
//       {
//         path: '/system',
//         component: EmptyLayout,
//       },
//     ],
//   },
// ];

export default function AuthenticRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forget">
          <ForgetPassword />
        </Route>
        <PrivateRoute path="/">
          <MainLayout>
            <Switch>
              <Route path="/system">
                <Switch>
                  <Route exact path="/system/account">
                    <Switch>
                      <Route exact path="/system/account/list">
                        <AcountList />
                      </Route>
                    </Switch>
                  </Route>
                  <Route exact path="/system/role">
                    <Switch>
                      <Route exact path="/system/role/list">
                        <RoleList />
                      </Route>
                    </Switch>
                  </Route>
                </Switch>
              </Route>
              <Route path="/xxx">
                <Switch>
                  <Route exact path="/xxx/proxy">
                    <Proxy />
                  </Route>
                </Switch>
              </Route>
              <Route exact path="/">
                <Welcome />
              </Route>
            </Switch>
          </MainLayout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
