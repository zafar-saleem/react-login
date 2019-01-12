import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';

function isLoggedIn() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginPage} />
    <Route path='login' component={LoginPage} />
    <Route path='register' component={RegisterPage} />
    <Route path='dashboard' component={DashboardPage} onEnter={requireAuth} />
  </Route>
);