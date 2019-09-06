import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import City from './pages/City/index.jsx';
import User from './pages/User/index.jsx';
import Login from './pages/Login/index.jsx';

function App(props) {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/citylist" exact component={City}></Route>
        <Route path="/hongkong" exact component={City}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
