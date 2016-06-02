import React     from 'react';
import { Route } from 'react-router';

import Main from './components/Main.js';
import Login from './components/Login.js';
import ListsOverview from './components/ListsOverview.js';

export default (
  <Route path="/" component={Main}>
    <Route path="/login" component={Login} />
    <Route path="/overview" component={ListsOverview} />
  </Route>
);
