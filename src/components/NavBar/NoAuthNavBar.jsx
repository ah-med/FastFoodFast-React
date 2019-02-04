import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuIcon from '../../assets/images/icons/menu.PNG';
import accountIcon from '../../assets/images/icons/account.png';
import cartIcon from '../../assets/images/icons/cart.png';


const NoAuthNavBar = (props) => {
    const { type, isAuth } = props;
        return (
            <header>
                <div className="container">
                    <div className="left">
                        <div id="menu" className="mobile">
                            <img src={menuIcon} alt="menu" onClick={'console.log("Hello Mobile")'} />
                        </div>
                        <div id="brand">
                            <h1>
                                <a href="/">DeLite Fast Food</a>
                            </h1>
                        </div>
                    </div>
                    <div className="right">
                        <nav className="desktop">
                            <ul>
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/foodItems">Food Items</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div id="auth">
                            <span  className="desktop">
                                <NavLink to="/login">Login </NavLink>
                                 | <NavLink to="/signup">SignUp</NavLink>
                            </span>
                            <NavLink className={(isAuth) ? "hide": "desktop"} to="./signup">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </NavLink>
                            <NavLink to="./login.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
}

NoAuthNavBar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
};

export default NoAuthNavBar;
