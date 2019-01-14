import React from 'react';


const toggleModal = () => {
    'console.log("toggled");'
}

const MobileSideNav = () => {
    return (
        <nav id="navModal" className="mobile modal hide">
            <ul>
                <span className="click" onClick={toggleModal('navModal')}>X</span>
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="./user_orders.html">My Orders</a>
                </li>
                <li>
                    <a href="./user_food_items.html">Food Items</a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileSideNav;
