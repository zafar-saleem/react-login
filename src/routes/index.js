import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginPage} />
    <Route path='login' component={LoginPage} />
    <Route path='register' component={RegisterPage} />
  </Route>
);