import React, { Component } from "react";
import PropTypes from 'prop-types';
import { hot } from "react-hot-loader";
import Footer from './common/Footer.jsx';
import '../assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default hot(module)(App);
