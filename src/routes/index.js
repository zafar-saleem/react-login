import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import RegisterPage from '../components/RegisterPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={RegisterPage} />
    <Route path='/login' component={RegisterPage} />
  </Route>
);