import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import SignupContainer from './containers/SignupContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import HomePage from './components/home/HomePage.jsx';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </div>
  </Router>
);


export default routing;
