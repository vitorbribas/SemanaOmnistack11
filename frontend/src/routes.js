import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';
import OngProfile from './pages/OngProfile';

export default function Routes(params) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/ong-profile" component={OngProfile} />
      </Switch>
    </BrowserRouter>
  );
}

