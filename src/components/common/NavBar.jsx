import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '../../assets/images/icons/menu.PNG';
import accountIcon from '../../assets/images/icons/account.png';
import cartIcon from '../../assets/images/icons/cart.png';


class NavBar extends Component {
    render() {
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
                                <li>
                                    <a href="./user_orders.html">My Orders</a>
                                </li>
                                <li>
                                    <a href="./user_food_items.html">Food Items</a>
                                </li>
                            </ul>
                        </nav>
                        <div id="auth">
                            <span className="desktop">
                                <NavLink to="/login">Login </NavLink>
                                 | <NavLink to="/signup">SignUp</NavLink>
                            </span>
                            <a href="./signup.html">
                                <img className="mobile" src={accountIcon} alt="account" />
                            </a>
                        </div>
                        <div id="cart-menu">
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
}

export default NavBar;
