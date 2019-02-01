import React, { Component } from "react";
import PropTypes from 'prop-types';
import { hot } from "react-hot-loader";
import '../assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default hot(module)(App);
