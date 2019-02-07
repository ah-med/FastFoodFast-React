import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});



export default connect(mapStateToProps, null)(ProtectedRoute);
