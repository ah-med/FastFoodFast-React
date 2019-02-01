import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import SignupContainer from './containers/SignupContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import HomePageContainer from './containers/HomePageContainer.jsx';
import AddMealContainer from './containers/AddMealContainer.jsx';
import FoodItemsContainer from './containers/FoodItemsContainer.jsx';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/fooditems" component={FoodItemsContainer} />
        <ProtectedRoute path="/add-meal" component={AddMealContainer}/>
      </Switch>
    </div>
  </Router>
);


export default routing;
