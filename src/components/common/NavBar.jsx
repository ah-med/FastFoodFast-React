import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuIcon from '../../assets/images/icons/menu.PNG';
import accountIcon from '../../assets/images/icons/account.png';
import cartIcon from '../../assets/images/icons/cart.png';


const NavBar = (props) => {
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
                                <a href="./index.html">DeLite Fast Food</a>
                            </h1>
                        </div>
                    </div>
                    <div className="right">
                        <nav className="desktop">
                            <ul>
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                <li className={(type==="admin") ? "hide": ""}>
                                    <a href="./user_orders.html">My Orders</a>
                                </li>
                                <li>
                                    <a href="./user_food_items.html">Food Items</a>
                                </li>
                                <li className={(type==="admin") ? "": "hide"}>
                                    <a href="./orders.html">Orders</a>
                                </li>
                            </ul>
                        </nav>
                        <div id="auth">
                            <span  className={(isAuth) ? "hide": "desktop"}>
                                <NavLink to="/login">Login </NavLink>
                                 | <NavLink to="/signup">SignUp</NavLink>
                            </span>
                            <a className={(isAuth) ? "hide": "desktop"} href="./signup.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </a>
                            <span className={(isAuth) ? "desktop": "desktop hide"}>
                                <a id="logout" href="Javascript:void(0);" onClick={console.log("logout()")}>Logout</a>
                            </span>
                            <a href="./login.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </a>
                        </div>
                        <div id="cart-menu" className={(type==="admin") ? "hide": ""}>
                            <a href="./checkout.html">
                                <img src={cartIcon} alt="cart" />
                                <span id="cart"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
}

NavBar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
};

export default NavBar;
