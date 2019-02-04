import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuIcon from '../../assets/images/icons/menu.PNG';
import accountIcon from '../../assets/images/icons/account.png';
import cartIcon from '../../assets/images/icons/cart.png';


const UserNavBar = (props) => {
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
                                <li className={(type==="admin") ? "hide": ""}>
                                    <NavLink to="/myOrders">My Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/foodItems">Food Items</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div id="auth">
                            <NavLink className={(isAuth) ? "hide": "desktop"} to="./signup.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </NavLink>
                            <span className={(isAuth) ? "desktop": "desktop hide"}>
                                <NavLink id="logout" to="Javascript:void(0);" onClick={console.log("logout()")}>Logout</NavLink>
                            </span>
                            <NavLink to="./login.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </NavLink>
                        </div>
                        <div id="cart-menu" className={(type==="admin") ? "hide": ""}>
                            <NavLink to="/checkout">
                                <img src={cartIcon} alt="cart" />
                                <span id="cart"></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
}

UserNavBar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
};

export default UserNavBar;
