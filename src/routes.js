import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/about/index';
import Signin from './pages/signin/index';
import Home from './pages/home/index';

const Routes = () => (
  <>
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
  </>
);

export default Routes;