import React from 'react';


const MobileSideNav = () => {
    return (
        <nav id="navModal" className="mobile modal hide">
            <ul>
                <span className="click" onClick={() => {}}>X</span>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="./user_orders.html">My Orders</a>
                </li>
                <li>
                    <a href="./fooditems">Food Items</a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileSideNav;
